import Website from "@/components/icons/Website";
import Link from "next/link";

export default function LinkTab({ link: { url, title } }: {link: { url: string, title: string}}) {
    return (
        <Link href={url} target="_blank" >
        <button className="w-fit p-[10px] bg-white shadow smoothe hover:shadow-md rounded-xl flex items-center gap-2">
            <div className="w-[15px] justify-center items-center">
                <Website />
            </div>
            <h1 className="w-full text-left text-sm">{title}</h1>
        </button>
        </Link>
    )
}