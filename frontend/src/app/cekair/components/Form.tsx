"use client";

import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUp, Image,  MousePointerSquareDashed } from "lucide-react";
import { useState, ChangeEvent, FormEvent, useRef, useEffect } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import toast from "react-hot-toast";
import Link from "next/link";


const INFORMASI = [
    {
      kondisi: "Air terdeteksi kotor.",
      solusi: "Disarankan untuk membersihkan atau mengganti air.",
    },
    {
      kondisi: "Air terdeteksi bersih.",
      solusi: "Tetap menjaga kebersihan untuk mencegah kontaminasi.",
    },
  ] as const;
  

const Form = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        ph: "",
        solids: "",
        turbidity: "",
    });
    const [result, setResult] = useState<number | null>(null);
    const [showPrediction, setShowPrediction] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const [handlingInfo, setHandlingInfo] = useState<string>("");
    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (showPrediction && resultRef.current) {
          resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, [showPrediction]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePredictClick = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.ph || !formData.solids || !formData.turbidity || !file) {
          toast.error("Please input the data and upload an image.");
          return;
        }
    
        const url = "http://localhost:5000/predict";
        setIsLoading(true);
        const formDataToSend = new FormData();
        formDataToSend.append("ph", formData.ph);
        formDataToSend.append("solids", formData.solids);
        formDataToSend.append("turbidity", formData.turbidity);
        if (file) {
          formDataToSend.append("file", file);
        }
    
        fetch(url, {
          method: "POST",
          body: formDataToSend,
        })
          .then((response) => response.json())
          .then((response) => {
            setResult(response.Prediction);
            setIsLoading(false);
            setShowPrediction(true);
    
            if (response.Prediction === 0) {
              setHandlingInfo(INFORMASI[0].kondisi);
            } else if (response.Prediction === 1) {
              setHandlingInfo(INFORMASI[1].kondisi);
            } else {
              setHandlingInfo("Menunggu hasil prediksi...");
            }
    
            // Scroll to result section
            if (resultRef.current) {
              resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          })
          .catch((error) => {
            setIsLoading(false);
            toast.error("An error occurred while processing the request.");
            console.error("Error:", error);
          });
      };

    const onDropAccepted = (acceptedFiles: File[]) => {
        setFile(acceptedFiles[0]);
        setIsDragOver(false);
    };

    const onDropRejected = (rejectedFiles: FileRejection[]) => {
        const [file] = rejectedFiles;
        setIsDragOver(false);
        toast.error(`${file.file.type} type is not supported. Please choose a PNG, JPG, or JPEG image.`);
    };

    return (
        <MaxWidthWrapper>
            <form onSubmit={handlePredictClick}>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full max-w-lg ">
                        <Input
                            type="number"
                            name="ph"
                            value={formData.ph}
                            onChange={handleChange}
                            placeholder="PH"
                            className="mb-4"
                        />
                        <Input
                            type="number"
                            name="solids"
                            value={formData.solids}
                            onChange={handleChange}
                            placeholder="Solids"
                            className="mb-4"
                        />
                        <Input
                            type="number"
                            name="turbidity"
                            value={formData.turbidity}
                            onChange={handleChange}
                            placeholder="Turbidity"
                            className="mb-4"
                        />
                    </div>

                    <div>
                        <Label htmlFor="picture">Gambar</Label>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Dropzone
                                onDropRejected={onDropRejected}
                                onDropAccepted={onDropAccepted}
                                accept={{
                                    "image/png": [".png"],
                                    "image/jpeg": [".jpeg"],
                                    "image/jpg": [".jpg"],
                                }}
                                onDragEnter={() => setIsDragOver(true)}
                                onDragLeave={() => setIsDragOver(false)}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <div
                                        className="h-full w-full flex-1 flex flex-col items-center justify-center"
                                        {...getRootProps()}
                                    >
                                        <input {...getInputProps()} />
                                        {isDragOver ? (
                                            <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
                                        ) : (
                                            <Image className="h-6 w-6 text-zinc-500 mb-2" />
                                        )}
                                        <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                                            {isDragOver ? (
                                                <p>
                                                    <span className="font-semibold">Letakkan file</span> untuk mengunggah
                                                </p>
                                            ) : (
                                                <p>
                                                    <span className="font-semibold">Klik untuk mengunggah</span> atau seret dan lepas
                                                </p>
                                            )}
                                        </div>
                                        <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>
                                    </div>
                                )}
                            </Dropzone>
                        </div>
                        {file && (
                            <div className="mt-2 max-w-sm">
                                <p>File terpilih: {file.name}</p>
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="Gambar terpilih"
                                    className="max-w-full h-auto mt-2 rounded-xl"
                                />
                            </div>
                        )}
                    </div>

                </div>

                <div className="flex justify-end mt-4 mb-4">
                    <Button type="submit" variant="outline" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Unggah"}
                    </Button>
                </div>
            </form>

            {/* Tampilkan hasil prediksi jika sudah ada */}
            <div className="mt-24 mb-12 scroll-mt-32" ref={resultRef}>
                {showPrediction && (
                    <div className="flex flex-col w-full justify-between items-center">
                        <div className="flex flex-col w-full justify-between items-center">
                            {result === 0 ? (
                                <div className="flex flex-col lg:flex-row  w-full justify-between items-center">
                                    <div className="max-w-lg text-justify mb-8 lg:mb-0">
                                        <h1 className="font-bold text-4xl lg:text-6xl mb-4">Kotor</h1>
                                        <p className="text-lg lg:text-2xl font-light mb-4">{handlingInfo}</p>
                                        <h1 className="font-bold text-lg lg:text-2xl mb-4">Solusi</h1>
                                        <p className="text-lg lg:text-2xl font-light mb-4">Solusi untuk PH rendah atau terlalu tinggi, kekeruhan terlalu tinggi</p>
                                    </div>
                                    <div className="">
                                        <img src={file ? URL.createObjectURL(file) : ''} alt="Kotor" className="max-w-full lg:max-w-xl h-auto mt-2 rounded-xl" />
                                    </div>
                                </div>
                            ) : result === 1 ? (
                                <div className="flex flex-col lg:flex-row justify-between items-center">
                                    <div className="max-w-lg text-justify mb-8 lg:mb-0">
                                        <h1 className="font-bold text-4xl lg:text-6xl  mb-4">Bersih</h1>
                                        <p className="text-lg lg:text-2xl font-light mb-4">{handlingInfo}</p>
                                        <h1 className="font-bold text-lg lg:text-2xl mb-4">Solusi</h1>
                                        <p className="text-lg lg:text-2xl font-light mb-4">Solusi untuk PH rendah atau terlalu tinggi, kekeruhan terlalu tinggi</p>
                                    </div>
                                    <div className="">
                                        <img src={file ? URL.createObjectURL(file) : ''} alt="Bersih" className="max-w-full lg:max-w-xl h-auto mt-2 rounded-xl" />
                                    </div>
                                </div>
                            ) : (
                                "Menunggu hasil prediksi..."
                            )}
                        </div>
                        <Link href="" className="flex justify-center flex-col items-center mt-8">
                            <div>
                                <ArrowUp/>
                            </div>
                            <div>
                                <p>Cek Air Kembali</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </MaxWidthWrapper>
    );
};

export default Form;