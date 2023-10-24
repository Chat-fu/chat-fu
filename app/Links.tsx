import LinkTab from "./LinkTab"

export default function Links() {
    const links = [{
        url: "https://example.com",
        title: "example.com"
    }]
    return (
        <div className="relative w-full flex flex-col gap-4 pt-[20px] items-start md:items-end">
            {links.map((link, index) => <LinkTab key={index} link={link} />)}
        </div>
    )
}