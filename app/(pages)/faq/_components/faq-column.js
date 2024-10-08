import Link from "next/link";


export default function FAQColumn({heading,para,url,link,para1,url1,link1}) {
    return (
        <>
            <div className="bg-primary rounded-2xl p-4">
                <h3 className="text-xl text-grey font-semibold mb-2">{heading}</h3>
                <p className="text-grey text-"> {para}
                    <Link href={url} className="text-blue"> {link} </Link>
                    {para1}
                    <Link href={url1} className="text-blue"> {link1} </Link>
                </p>
            </div>
        </>
    )
}