
const tooltips = document.querySelectorAll('[data-tooltip');

tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(event) {
    console.log(event)
}