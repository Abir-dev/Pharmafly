let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');

signInBtn.addEventListener('click',()=>{
    nameField.computedStyleMap.maxheight = '0';
    title.innerHTML = 'Sign In';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
});
signUpBtn.addEventListener('click',()=>{
    nameField.computedStyleMap.maxheight = '60px';
    title.innerHTML = 'Sign Up';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission event
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted successfully!');
    });
});
