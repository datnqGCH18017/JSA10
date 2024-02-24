const section = Array.from(document.querySelectorAll('.section'));
console.log(section);
const flexContainer = document.querySelector('.flex-container')
flexContainer.addEventListener('mousemove', function (e) {
    section.map(i => i.style.opacity = 100);
})
