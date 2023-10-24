import Image from "next/image";

export default function Cover() {    
    return (
        <div className="relative w-full h-[200px] md:h-[285px] rounded-b-2xl overflow-hidden flex items-center">
            <Image className="w-full h-full object-cover" src="/cover.jpeg" alt="Cover Image" fill={true} />
        </div>
    )
}