function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Optional: Close modal when clicking outside of it
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
let currentLang = 'en';

function changeLanguage() {
    const elements = document.querySelectorAll('.lang');
    const langImage = document.getElementById('langImage');

    if (currentLang === 'en') {
        currentLang = 'pt';
        langImage.src = 'img/186203.png';
        langImage.alt = 'Português';
    } else {
        currentLang = 'en';
        langImage.src = 'img/197484.png';
        langImage.alt = 'English';
    }

    elements.forEach(el => {
        el.classList.remove('active');
        if (el.classList.contains(currentLang)) {
            el.classList.add('active');
        }
    });
}
function filterProjects(category) {
    var projects = document.getElementsByClassName('project-card');
    for (var i = 0; i < projects.length; i++) {
        if (category === 'all') {
            projects[i].style.display = 'block';
        } else {
            if (projects[i].classList.contains(category)) {
                projects[i].style.display = 'block';
            } else {
                projects[i].style.display = 'none';
            }
        }
    }
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
