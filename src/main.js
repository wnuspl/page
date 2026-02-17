fetch('src/content.json')
  .then(response => response.text())
  .then(text => {
    const json = JSON.parse(text);
    renderContent(json);
});



function renderContent(json) {
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