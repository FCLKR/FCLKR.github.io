const button = document.getElementById('changeDescriptionBtn');
const descriptionElement = document.getElementById('description');

let isDescriptionChanged = true; // Variable de estado

// Cambia la descripción y el texto del botón al hacer clic
button.addEventListener('click', function() {
    if (isDescriptionChanged) {
        // Si ya se ha cambiado, vuelve a la descripción original
        descriptionElement.textContent = "My skills range from programming in various languages and database management to the implementation of technological solutions that optimize business processes. I am able to work in all stages of the software lifecycle, from requirements analysis and planning to testing and deployment. My hands-on experience in real projects allows me to tackle complex problems with innovative and efficient solutions.";
        button.textContent = "Back";
    } else {
        // Si no se ha cambiado, establece la nueva descripción
        descriptionElement.textContent = "As a software development technologist, I have a solid background in the design, implementation and maintenance of computer applications and systems.";
        button.textContent = "Know more";
    }
    
    // Alterna el estado
    isDescriptionChanged = !isDescriptionChanged;
});

// Mueve el botón al pasar el mouse
button.addEventListener('mouseover', function() {
    button.classList.add('move');
});

// Vuelve a la posición original al salir el mouse
button.addEventListener('mouseout', function() {
    button.classList.remove('move');
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))