export function renderContent(json) {
    const contentSection = document.getElementById("content");

    for (const section of json) {
        let item;
        switch (section.type) {
            case "project":
                item = createProjectElement(section);
                break;
        }

        contentSection.appendChild(item);
        contentSection.appendChild(document.createElement("br"));
    }
}



const projectClasses = {
    main: "flex-row",
    header: "text-lg font-semibold break-after-auto",
    description: "text-base bold",
    linkContainer: "flex-col",
    links: "p-2 text-blue-500 hover:underline"
}

function createProjectElement(project) {
    const div = document.createElement("div");
    div.classList.add(...projectClasses.main.split(" "));

    const header = document.createElement("h2");
    header.classList.add(...projectClasses.header.split(" "));
    header.innerText = project.title;
    
    const description = document.createElement("p");
    description.classList.add(...projectClasses.description.split(" "));
    description.innerText = project.description;

    div.appendChild(header);
    div.appendChild(description);

    const linkContainer = document.createElement("div");
    linkContainer.classList.add(...projectClasses.linkContainer.split(" "));

    for (const link of project.links) {
        const linkElement = document.createElement("a");
        linkElement.setAttribute("href", link.url);

        linkElement.innerText = `${link.display}`;
        linkElement.classList.add(...projectClasses.links.split(" "))

        linkContainer.appendChild(linkElement);
    }

    div.appendChild(linkContainer);

    return div;
}