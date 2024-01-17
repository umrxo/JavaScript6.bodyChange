let body = document.querySelector('body')
let items1 = document.querySelector('.items1')

items1.addEventListener('click',()=>{
    body.style.background = 'red'
})
let items2 = document.querySelector('.items2')

items2.addEventListener('click',()=>{
    body.style.background = 'yellow'
})
let items3 = document.querySelector('.items3')

items3.addEventListener('click',()=>{
    body.style.background = 'blue'
})
let items4 = document.querySelector('.items4')

items4.addEventListener('click',()=>{
    body.style.background = 'green'
})
let items5 = document.querySelector('.items5')

items5.addEventListener('click',()=>{
    body.style.background = 'white'
})


let blocks = document.querySelectorAll('.blocks')
let box1 = document.querySelector('.box1')

box1.addEventListener('click',()=>{
    blocks.forEach((el)=>{
        el.style.background = 'red'
    })
})
let box2 = document.querySelector('.box2')

box2.addEventListener('click',()=>{
    blocks.forEach((el)=>{
        el.style.background = 'yellow'
    })
})
let box3 = document.querySelector('.box3')

box3.addEventListener('click',()=>{
    blocks.forEach((el)=>{
        el.style.background = 'blue'
    })
})
let box4 = document.querySelector('.box4')

box4.addEventListener('click',()=>{
    blocks.forEach((el)=>{
        el.style.background = 'green'
    })
})
let box5 = document.querySelector('.box5')

box5.addEventListener('click',()=>{
    blocks.forEach((el)=>{
        el.style.background = 'white'
    })
})