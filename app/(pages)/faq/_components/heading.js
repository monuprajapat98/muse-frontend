import react from "react";


export default function Heading({title}) {
    return (
        <>
            <div className="flex items-center justify-center flex-col gap-4 text-black text-2xl font-bold text-center mt-8">
                <h3>{title}</h3>
            </div>
        </>
    )
}