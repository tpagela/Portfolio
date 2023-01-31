const projects = [
    {
        id: 1,
        title: 'Rick and Morty Wiki',
        description: 'Web application that utilizes JavaScript, CSS, and HTML to provide users with the ability to search for characters, view locations on the show, and see all episodes in the show. It\'s a tool for fans of the show to explore and learn more about the show\'s universe.',
        image: '/imports/Screenshot_11.png'
    },
    {
        id: 2,
        title: 'Weather App',
        description: 'My first experience working with API\'s. Definitely a fun thing to look back on.',
        image: '/imports/weather_app.png'
    },
    {
        id: 3,
        title: 'Apex Legends Store Tracker',
        description: 'I used to play the video game "Apex Legends" a lot. There was a cosmetic on the game that I really wanted to get, but because I didn\'t log in every day it was hard to find out when it was in the shop rotation. So I made this!',
        image: '/imports/weather_app.png'
    },
    {
        id: 4,
        title: 'Pokedex',
        description: 'Always been a big pokemon fan, and wanted to work with their sprites to do something cool',
        image: '/imports/Screenshot_144.png'
    }
];

const projectsContainer = document.querySelector('.projects');

for (let project of projects) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const projectLeftDiv = document.createElement('div');
    projectLeftDiv.classList.add('project-left');

    const projectImage = document.createElement('img');
    projectImage.src = project.image;
    projectImage.alt = 'Project Preview';
    projectLeftDiv.appendChild(projectImage);

    const projectRightDiv = document.createElement('div');
    projectRightDiv.classList.add('project-right');

    const projectTitle = document.createElement('h2');
    projectTitle.innerText = project.title;
    projectRightDiv.appendChild(projectTitle);

    const projectDescription = document.createElement('p');
    projectDescription.innerText = project.description;
    projectRightDiv.appendChild(projectDescription);

    projectDiv.appendChild(projectLeftDiv);
    projectDiv.appendChild(projectRightDiv);

    projectsContainer.appendChild(projectDiv);
}