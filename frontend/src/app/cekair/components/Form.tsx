"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, ChangeEvent, FormEvent } from "react";

const Form = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        ph: "",
        solids: "",
        turbidity: "",
    });
    const [result, setResult] = useState("");
    const [showSpan, setShowSpan] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name as keyof typeof formData; 
        let inputData = { ...formData };
        inputData[name] = value;
        setFormData(inputData);
    };
    

    const handlePredictClick = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = "http://localhost:5000/predict";
        setIsLoading(true);
        const jsonData = JSON.stringify(formData);

        fetch(url, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: jsonData,
        })
            .then((response) => response.json())
            .then((response) => {
                setResult(response.Prediction);
                setIsLoading(false);
                setShowSpan(true);
            });
    };

    return (
        <MaxWidthWrapper>
            <h1 className="mb-4">Water Prediction</h1>
            <form onSubmit={handlePredictClick}>
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

                <div className="flex justify-end">
                    <Button type="submit" variant="outline" disabled={isLoading}>
                        {isLoading ? "Loading..." : "Submit"}
                    </Button>
                </div>
            </form>
            {showSpan && <span>Prediction: {result}</span>}
        </MaxWidthWrapper>
    );
};

export default Form;
