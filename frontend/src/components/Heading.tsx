import { cn } from "@/lib/utils";

interface HeadingProps {
    title: string;
    description?: string;
    className?: string
}

const Heading = ({title, description, className} : HeadingProps) => {
    return(
        <div className={cn("text-center",className)}>
            <h1 className="text-4xl sm:text-6xl mb-4 font-semibold">
                {title}
            </h1>
            <p className="text-sm sm:text-2xl font-light mb-4">
                {description}
            </p>
        </div>
    )
}

export default Heading;