const data = `[
    {
        "type": "project",
        "title": "demys",
        "description": "demystified command line editor (v0.1.0-alpha)",
        "links": [
            {
                "display": "Github Repo",
                "url": "https://github.com/wnuspl/demys"
            },
            {
                "display": "Latest Release",
                "url": "https://github.com/wnuspl/demys/releases/download/v0.1.0-alpha/demys.exe"
            }
        ]   
    },
    {
        "type": "project",
        "title": "tennis elo rankings",
        "description": "elo system for atp players tracking all-time greats and modern talents",
        "links": [
            {
                "display": "Github Repo",
                "url": "https://github.com/wnuspl/tennis-elo"
            }
        ]   
    }
]`;


const sectionList = JSON.parse(data);

const contentSection = document.getElementById("content");

for (const section of sectionList) {
    let item;
    switch (section.type) {
        case "project":
            item = createProjectElement(section);
            break;
    }

    contentSection.appendChild(item);
    contentSection.appendChild(document.createElement("br"));
}


function createProjectElement(project) {
    const div = document.createElement("div");
    div.classList.add("project");

    const header = document.createElement("h2");
    header.innerText = project.title;
    
    const description = document.createElement("p");
    description.innerText = project.description;

    div.appendChild(header);
    div.appendChild(description);

    for (const link of project.links) {
        const linkElement = document.createElement("a");
        linkElement.innerText = `${link.display}`;
        linkElement.setAttribute("href", link.url);
        div.appendChild(linkElement);
        div.appendChild(document.createElement("br"));
    }

    return div;
}