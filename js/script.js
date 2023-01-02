const linkHex = document.querySelector('#linkhex')
const linkRgb = document.querySelector('#linkrgb')
const divHex = document.querySelector('.hex')
const divRgb = document.querySelector('.rgb')

const btn = document.getElementById('btn')
const btnRgb = document.getElementById('btn-rgb')

const main = document.getElementById('main-color')
const color = document.querySelector('.color')
const colorRgb = document.querySelector('.colorrgb')

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const num1 = [0, 1, 2]
const num2 = [0, 1, 2, 3, 4, 5]
const num3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

linkHex.addEventListener('click', function(){
    divRgb.style.display = 'none'
    divHex.style.display = 'block'
    main.style.backgroundColor = "#222831"
    color.style.backgroundColor = "#222831"
})

linkRgb.addEventListener('click', function(){
    divRgb.style.display = 'block'
    divHex.style.display = 'none'
    main.style.backgroundColor = "#222831"
color.style.backgroundColor = "#222831"
})

btn.addEventListener('click', function () {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    console.log(hexColor);
    main.style.backgroundColor = hexColor
    color.style.backgroundColor = hexColor
    color.textContent = hexColor
    function getRandomNumber() {
        return Math.floor(Math.random() * hex.length)
    }
})
btnRgb.addEventListener('click', function () {
    let rgbColor = 'rgb('
    for (let r = 0; r < 3; r++) {
        rgbColor += num1[rgbRandomNumber1()]
        for (let g = 0; g < 1; g++) {
            rgbColor += num2[rgbRandomNumber2()]
            for (let b = 0; b < 1; b++) {
                rgbColor += num3[rgbRandomNumber3()]
                rgbColor += ','
            }
        }
    }
    rgbColor = rgbColor.slice(0, 15)
    rgbColor += ')'
    console.log(rgbColor);
    main.style.backgroundColor = rgbColor
    colorRgb.style.backgroundColor = rgbColor
    colorRgb.textContent = rgbColor

    function rgbRandomNumber1() {
        return Math.floor(Math.random() * num1.length)
    }
    function rgbRandomNumber2() {
        return Math.floor(Math.random() * num2.length)
    }
    function rgbRandomNumber3() {
        return Math.floor(Math.random() * num3.length)
    }
})
