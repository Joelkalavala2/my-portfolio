const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const nameElement = document.getElementById('name');
const aboutMeElement = document.getElementById('about-me');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

nameElement.addEventListener('mouseenter', () => {
    cursor.classList.add('hover-effect');
});

nameElement.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover-effect');
});

const nameText = "Joel Kalavala";
let nameIndex = 0;

function typeName() {
    if (nameIndex < nameText.length) {
        document.getElementById("name-text").innerHTML += nameText.charAt(nameIndex);
        nameIndex++;
        setTimeout(typeName, 150);
    }
}

const aboutMeText = "About me";
let aboutMeIndex = 0;

function typeAboutMe() {
    if (aboutMeIndex < aboutMeText.length) {
        aboutMeElement.innerHTML += aboutMeText.charAt(aboutMeIndex);
        aboutMeIndex++;
        setTimeout(typeAboutMe, 150);
    }
}

window.onload = () => {
    typeName();
    setTimeout(typeAboutMe, 2000);
};

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.getElementById('Hi').style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;
    document.getElementById('name').style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;
    document.getElementById('welcome').style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;
});

document.querySelector('nav a[href="#div2"]').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('div2').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function() {
    const imageSide = document.getElementById('imageSide');
    const textSide = document.getElementById('textSide');

    setTimeout(() => {
        imageSide.classList.add('animated');
        textSide.classList.add('fade-in');
    }, 500);
});

// Experience Section Script
const rectangles = document.querySelectorAll('.rectangle');
const experienceDetails = document.querySelector('.experience-details');
const div3 = document.getElementById('div3');
const details = [
    { title: "Summer Intern (May 2022 - July 2022)", description: "Between May 26 and July 26, 2022, I worked as a Summer Intern at ONGC, where I gained hands-on experience with vital operational systems.  I have practical expertise with a variety of gas compression technologies, which are crucial for the transportation and processing of hydrocarbons.  I also gained practical knowledge of integrated power generation systems, particularly how the GTG-STEAM hybrid power plants, which are a vital component of ONGC's energy infrastructure, are operated and maintained.  This internship fostered a deeper awareness of industry best practices by offering a thorough introduction to the cutting-edge technologies used in the oil and natural gas sector." },
    { title: "Tekla Detailer (Jun 2023 - Aug 2023)", description: "As a Tekla Detailer, I specialized in the creation of detailed 3D models and fabrication drawings for structural steel projects. My experience encompasses the accurate modeling and detailing of complex steel structures, including those for multi-story commercial and residential buildings. I consistently delivered high-quality outputs, ensuring adherence to project specifications and industry standards, facilitating seamless fabrication and erection processes." },
    { title: "Java Intern (Jun 2024 - Sep 2024)", description: "During my Java internship, I developed a student management application. This project involved designing and implementing features to add, remove, and retrieve student data using Java. I gained practical experience in data manipulation, object-oriented programming, and basic database interaction. This project demonstrated my ability to apply core Java concepts to create functional applications." },
    { title: "Fraud Analyst (Sep 2023 - present)", description: "At Wipro, I demonstrated a progressive career trajectory from Fraud Analyst to Subject Matter Expert, specializing in financial risk management and operational optimization. Throughout my tenure, I consistently delivered accurate and efficient processing of high-volume customer requests and financial transactions, adhering to stringent Service Level Agreements (SLAs). I excelled in the proactive identification and mitigation of operational and financial risks, utilizing robust analytical methodologies to investigate discrepancies and implement process enhancements. My contributions included the development of continuous improvement suggestions, leading to enhanced efficiency and accuracy in customer request processing, and fostering a culture of operational excellence." }
];

 // Function to check if div3 is fully in view
function isDiv3InView() {
    const rect = div3.getBoundingClientRect();
    return rect.top <= 0 && rect.bottom >= window.innerHeight;
}

// Update experience when div3 is fully in view
window.addEventListener('scroll', () => {
    if (isDiv3InView()) {
        experienceDetails.classList.add('visible'); // Show details section
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        let activeIndex = 0; // Default to Experience 1

        rectangles.forEach((rectangle, index) => {
            const rectTop = rectangle.getBoundingClientRect().top;
            if (rectTop < windowHeight / 2 && rectTop > -windowHeight / 2) {
                activeIndex = index; // Update active index based on scroll position
            }
        });


// Highlight the active rectangle and update details
        rectangles.forEach((rectangle, index) => {
            if (index === activeIndex) {
                rectangle.classList.add('active');
                experienceDetails.querySelector('h2').textContent = details[index].title;
                experienceDetails.querySelector('p').textContent = details[index].description;
                div3.style.backgroundImage = rectangle.style.backgroundImage; // Update div3 background
            } else {
                rectangle.classList.remove('active');
            }
        });
    } else {
        experienceDetails.classList.remove('visible'); // Hide details section
    }
});


// Click event for rectangles
rectangles.forEach((rectangle, index) => {
    rectangle.addEventListener('click', () => {
        if (isDiv3InView()) { // Only allow clicks when div3 is in view
            rectangles.forEach(rect => rect.classList.remove('active'));
            rectangle.classList.add('active');
            experienceDetails.querySelector('h2').textContent = details[index].title;
            experienceDetails.querySelector('p').textContent = details[index].description;
            div3.style.backgroundImage = rectangle.style.backgroundImage; // Update div3 background
        }
    });
});

// Add this after the existing javascript code
const containerDiv4 = document.querySelector('#div4 .container');
const rectanglesDiv4 = document.querySelectorAll('#div4 .rectangle');
const rightArrowDiv4 = document.querySelector('#div4 .right-arrow');
const leftArrowDiv4 = document.querySelector('#div4 .left-arrow');
let currentIndexDiv4 = 0;

function updateRectanglesDiv4() {
    rectanglesDiv4.forEach((rectangle, index) => {
        if (index === currentIndexDiv4) {
            rectangle.classList.add('active');
            rectangle.style.transform = 'translateX(0)';
            rectangle.style.zIndex = 5;
        } else if (index < currentIndexDiv4) {
            rectangle.classList.remove('active');
            rectangle.style.transform = `translateX(-${(currentIndexDiv4 - index) * 100}%)`;
            rectangle.style.zIndex = 1;
        } else {
            rectangle.classList.remove('active');
            rectangle.style.transform = `translateX(${(index - currentIndexDiv4) * 100}%)`;
            rectangle.style.zIndex = 1;
        }
    });

    if (currentIndexDiv4 === 0) {
        leftArrowDiv4.style.display = 'none';
    } else {
        leftArrowDiv4.style.display = 'block';
    }

    if (currentIndexDiv4 === rectanglesDiv4.length - 1) {
        rightArrowDiv4.style.display = 'none';
    } else {
        rightArrowDiv4.style.display = 'block';
    }
}

rightArrowDiv4.addEventListener('click', () => {
    if (currentIndexDiv4 < rectanglesDiv4.length - 1) {
        currentIndexDiv4++;
        updateRectanglesDiv4();
    }
});

leftArrowDiv4.addEventListener('click', () => {
    if (currentIndexDiv4 > 0) {
        currentIndexDiv4--;
        updateRectanglesDiv4();
    }
});

// Function to check if div4 is in view
function isDiv4InView() {
    const rect = document.getElementById('div4').getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0
    );
}

// Update rectangle positions when div4 comes into view
function handleDiv4Visibility() {
    if (isDiv4InView()) {
        currentIndexDiv4 = 0; // Ensure the first rectangle is active
        updateRectanglesDiv4();
        // REMOVED: window.removeEventListener('scroll', handleDiv4Visibility);
    }
}

// Add scroll listener to check div4 visibility
window.addEventListener('scroll', handleDiv4Visibility);

// Initial check in case div4 is already in view on load
if (isDiv4InView()) {
    currentIndexDiv4 = 0; // Ensure the first rectangle is active
    updateRectanglesDiv4();
    // REMOVED: window.removeEventListener('scroll', handleDiv4Visibility);
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a'); // Select all links in the nav

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href').substring(1); // Get the target ID (remove the #)
            const targetElement = document.getElementById(targetId); // Find the target element

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target
            }
        });
    });
});


// --- Firebase Contact Form Logic ---
// db and auth are now globally available from the <script> tag in HTML
const contactForm = document.querySelector('#div5 form'); // Get the form element

if (contactForm) { // Ensure the form exists before adding listener
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent default form submission to handle it with JS

        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;

        // Simple client-side validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return; // Stop the function if validation fails
        }

        try {
            // 1. Authenticate anonymously to satisfy Firestore rules
            // This creates a temporary, unidentifiable user session
            await auth.signInAnonymously();
            console.log("Signed in anonymously.");

            // 2. Add the form data to a new document in the 'messages' collection
            await db.collection('messages').add({
                name: name,
                email: email,
                message: message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp() // Get server timestamp
            });

            alert('Your message has been sent successfully!');
            contactForm.reset(); // Clear the form fields after successful submission
        } catch (error) {
            console.error('Error sending message:', error);
            // Provide a user-friendly error message
            alert('There was an issue sending your message. Please try again.');
        }
    });
} else {
    console.warn("Contact form not found. Firebase submission listener not attached.");
}
