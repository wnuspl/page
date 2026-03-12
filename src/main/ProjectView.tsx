import { useEffect, useState } from "react"

interface ProjectEntryProps {
    title: string,
    description: string,
    links: { display: string, url: string}[]
}
function ProjectEntry({title, description, links}: ProjectEntryProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                {links.map(link => (
                    <a key={link.display} href={link.url}>{link.display}</a>
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
        <>
        {data.map((entry) => (
            <ProjectEntry key={entry.title} title={entry.title} description={entry.description} links={entry.links} />
        ))}
        </>
    )
}

export default ProjectView;