import dosis from "@/fonts/dosis";
import Image from "next/image";

export default function Profile() {
    return (
        <div className="relative h-fit w-fit flex items-center absolute top-0 -translate-y-[15px]">
            <div className="shadow border-2 border-white rounded-full w-[75px] md:w-[125px] aspect-square bg-gray-300 relative overflow-hidden">
                <Image className="w-full h-full object-cover" src="/profile.jpeg" fill={true} alt="Profile" />
            </div>
            <div className="w-fit h-full flex flex-col px-[20px] md:gap-1 pt-[5px]">
                <h1 className="text-[28px] tracking-wide text-gray-800">John Doe</h1>
                <h1 className={`bg-black w-fit text tracking-wide text-gray-100 px-[10px] py-[3px] rounded-xl ${dosis.light}`}>Developer</h1>
            </div>
        </div>
    )
}