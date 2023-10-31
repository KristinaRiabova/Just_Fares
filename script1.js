const destinationsList = document.getElementById('destination-items');
const addDestinationButton = document.getElementById('add-destination-button');
const destinationForm = document.getElementById('destination-form');
const destinationIdInput = document.getElementById('destination-id');
const destinationNameInput = document.getElementById('destination-name');
const saveDestinationButton = document.getElementById('save-destination-button');
const cancelDestinationButton = document.getElementById('cancel-destination-button');

let destinationsData = [];


const storedData = localStorage.getItem('destinations');
if (storedData) {
    destinationsData = JSON.parse(storedData);
}

function saveDataToStorage() {
    localStorage.setItem('destinations', JSON.stringify(destinationsData));
}

function displayDestinations() {
    destinationsList.innerHTML = '';
    destinationsData.forEach(destination => {
        const li = document.createElement('li');
        li.textContent = destination.name;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editDestination(destination.id));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteDestination(destination.id));

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        destinationsList.appendChild(li);
    });
}

function showAddDestinationForm() {
    destinationForm.style.display = 'block';
    destinationIdInput.value = '';
    destinationNameInput.value = '';
}

function hideAddDestinationForm() {
    destinationForm.style.display = 'none';
    destinationIdInput.value = '';
    destinationNameInput.value = '';
}

function addDestination(name) {
    const newId = destinationsData.length + 1;
    destinationsData.push({ id: newId, name });
    saveDataToStorage();
    displayDestinations();
    hideAddDestinationForm();
}

function editDestination(id) {
    const destination = destinationsData.find(dest => dest.id === id);
    if (destination) {
        destinationIdInput.value = destination.id;
        destinationNameInput.value = destination.name;
        destinationForm.style.display = 'block';
    }
}

function saveDestination() {
    const id = parseInt(destinationIdInput.value);
    const name = destinationNameInput.value;
    if (!name) {
        alert('Please enter a valid name.');
        return;
    }

    if (id) {
        const destination = destinationsData.find(dest => dest.id === id);
        if (destination) {
            destination.name = name;
        }
    } else {
        addDestination(name);
    }

    saveDataToStorage();
    displayDestinations();
    hideAddDestinationForm();
}

function deleteDestination(id) {
    const index = destinationsData.findIndex(dest => dest.id === id);
    if (index !== -1) {
        destinationsData.splice(index, 1);
        saveDataToStorage();
        displayDestinations();
    }
}

addDestinationButton.addEventListener('click', showAddDestinationForm);
cancelDestinationButton.addEventListener('click', hideAddDestinationForm);
saveDestinationButton.addEventListener('click', saveDestination);


displayDestinations();

const generateCatButton = document.getElementById('generate-cat-button');
const catImageContainer = document.getElementById('cat-image-container');
generateCatButton.addEventListener('click', generateCatImageWithApiKey);
const apiKey = 'live_dTkU73Qgbqu6Exon2eqLtF6rsPM0wsn3cXm69R9on8etXRKUVgbMDzhd2OnmlVDb';


function generateCatImageWithApiKey() {

    fetch(`https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {

            if (data && data[0] && data[0].url) {
                const catImage = document.createElement('img');
                catImage.src = data[0].url;
                catImage.alt = 'Random Cat Image';
                catImage.width = 200;
                catImage.height = 200;
                catImageContainer.innerHTML = '';
                catImageContainer.appendChild(catImage);
            } else {
                catImageContainer.innerHTML = 'Failed to load a cat image. Please try again later.';
            }
        })
        .catch(error => {
            catImageContainer.innerHTML = 'An error occurred while fetching the cat image. Please try again later.';
        });
}

