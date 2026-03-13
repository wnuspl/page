import { useEffect, useState } from "react"

interface ProjectEntryProps {
    title: string,
    description: string,
    links: { display: string, url: string}[]
}
function ProjectEntry({title, description, links}: ProjectEntryProps) {
    return (
        <div className="flex-row p-2">
            <h2 className="text-lg font-semibold break-after-auto">{title}</h2>
            <p className="text-base bold">{description}</p>
            <div className="flex-col">
                {links.map(link => (
                    <a key={link.display} href={link.url} className="p-2 text-blue-500 hover:underline">{link.display}</a>
                ))}
            </div>
        </div>
    )
}

function ProjectView() {
    const [data, setData] = useState<ProjectEntryProps[] | null>(null);
    useEffect(() => {
        fetch("./content.json")
            .then(response => response.text())
            .then(text => setData(JSON.parse(text)));
    })

    if (!data) {
        return null;
    }

    return (
        <div className="p-4">
        {data.map((entry) => (
            <ProjectEntry key={entry.title} title={entry.title} description={entry.description} links={entry.links} />
        ))}
        </div>
    )
}

export default ProjectView;