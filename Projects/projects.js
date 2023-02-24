const projects = [
        {
                id: 1,
                title: 'Rick and Morty Wiki',
                description: 'Web application that utilizes JavaScript, CSS, and HTML to provide users with the ability to search for characters, view locations on the show, and see all episodes in the show. It\'s a tool for fans of the show to explore and learn more about the show\'s universe.',
                image: '../imports/wikipedia.png'
        },
        {
                id: 2,
                title: 'Weather App',
                description: 'My weather app pulls live weather data from an API and displays it in an intuitive and user-friendly interface. Users can search for weather in any location and see current temperature, humidity, and wind speed. The app was developed with a focus on functionality and ease of use, making it an ideal tool for anyone seeking real-time weather information."',
                image: '../imports/rain.png'
        },
        {
                id: 3,
                title: 'Apex Legends Store Tracker',
                description: 'My Apex Legends Store Tracker is a tool for avid players to keep track of the latest in-game store items. It pulls live data from the game\'s API and presents it in an easy-to-use interface, allowing users to quickly see what\'s currently available for purchase. I developed this app to solve my own problem of wanting to keep track of the store rotation while I was actively playing the game.',
                image: '../imports/game.png'
        },
        {
                id: 4,
                title: 'Pokedex',
                description: 'My Pokedex is a comprehensive Pokemon reference tool for fans of the franchise. It pulls data from an API to showcase the complete collection of Pokemon sprites, including all generations from Kanto to the latest. This app is the perfect companion for Pokemon enthusiasts, providing a visual reference to the beloved creatures and allowing for easy browsing of the entire Pokedex.',
                image: '../imports/pokeball.png'
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

        const projectLink = document.createElement('a');
        projectLink.href = '#';

        const projectTitle = document.createElement('h2');
        projectTitle.innerText = project.title;
        projectLink.appendChild(projectTitle);
        projectRightDiv.appendChild(projectLink);

        const projectDescription = document.createElement('p');
        projectDescription.innerText = project.description;
        projectRightDiv.appendChild(projectDescription);

        projectDiv.appendChild(projectLeftDiv);
        projectDiv.appendChild(projectRightDiv);

        projectsContainer.appendChild(projectDiv);
}