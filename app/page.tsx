import Bio from "./Bio";
import Chat from "./Chat";
import Cover from "./Cover";
import Links from "./Links";
import Profile from "./Profile";

export default function Home() {
    return (
        <div className="w-full min-h-screen h-full flex flex-col items-center">
            <div className="relative flex flex-col max-w-[954px] w-full h-full">
                <Cover />
                <div className="relative w-full h-full flex flex-col gap-2 px-[15px]">
                    <div className="relative flex w-full h-fit flex-col md:flex-row ">
                        <div className="relative w-full h-fit flex flex-col ">
                            <Profile />
                            <Bio />
                        </div>
                        <Links />
                    </div>
                    <Chat />
                </div>
            </div>
        </div>
    )
}