document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});

const skills = [
    "Full Stack Developer.",
    "Front End Developer.",
    "Web Developer.",
    "UI/UX Designer.",
    "Mobile App Developer."
];

let skillIndex = 0;
let charIndex = 0;
let currentSkill = "";
let isDeleting = false;

function type() {
    const typingElement = document.querySelector('.typing');
    if (isDeleting) {
        currentSkill = skills[skillIndex].substring(0, charIndex--);
    } else {
        currentSkill = skills[skillIndex].substring(0, charIndex++);
    }
    typingElement.textContent = currentSkill;

    if (!isDeleting && charIndex === skills[skillIndex].length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

document.addEventListener('DOMContentLoaded', type);


