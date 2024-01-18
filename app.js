const titre = document.querySelector('h1')
console.log(titre);
const btn1=document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const questionContainer = document.querySelector(".click_event");
console.log(questionContainer);
const mousemove = document.querySelector('.mousemove')
console.log(mousemove);


window.addEventListener('mousemove', (e) => {
    console.log(e);
    mousemove.style.left = e.pageX+'px';
    mousemove.style.top = e.pageY+'px';
})
window.addEventListener('mousedown', () => {
    mousemove.style.transform="scale(2) translate(-25%, -25%)"
})
window.addEventListener('mouseup', () => {
    mousemove.style.transform="scale(1) translate(-50%, -50%)"
})

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.backgroundColor='yellow'
    questionContainer.style.border='7px black dashed'
})
questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.backgroundColor = 'turquoise'
    questionContainer.style.border='7px black dashed'
})
btn1.addEventListener('mouseover', () => {
    btn1.style.backgroundColor = 'green'
    questionContainer.style.border='7px black double'
})