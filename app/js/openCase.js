// const { transform } = require("lodash")
let button = document.querySelector(".chickenSlider__button")
let chickenSlider = document.querySelector(".chickenSlider")
let widthSlide = 130
const imgOpen = {
    fly: ["knife-fly.png", "knife-fly", "Нож-бабочка"],
    ak: ["ak_1.png", "ak", "StatTrak™ AK-47"],
    gloves: ["Gloves.png", "gloves", "Мотоциклетные"],
    M4A1: ["M4A1-S_1.png", "M4A1", "Сувенирный"],
    knife: ["knife.png", "knife", "Нож-бабочка"]
}

button.onclick = function() {
    chickenSlider.style.visibility = "visible"
        // chickenSlider.removeChild()

    openCase()

}

reset()

function reset() {

    for (let i = 0; i < 200; i++) {
        let rand = random(1, 100)
            // console.log(rand);

        if (rand < 40) {
            let chickenSliderItem = document.createElement("div")
            chickenSliderItem.className = `chickenSlider__${imgOpen.fly[1]}`
            let chickenItemImg = document.createElement("img")
            chickenItemImg.className = "chickenSlider__img"
            chickenItemImg.src = `image/${imgOpen.fly[0]}`
            let chickenItemText = document.createElement("p")
            chickenItemText.className = "chickenSlider__text"
            chickenItemText.innerText = `${imgOpen.fly[2]}`
            chickenSliderItem.appendChild(chickenItemImg)
            chickenSliderItem.appendChild(chickenItemText)
            chickenSlider.appendChild(chickenSliderItem)
        }

        if (rand > 40 && rand < 80) {
            let chickenSliderItem = document.createElement("div")
            chickenSliderItem.className = `chickenSlider__${imgOpen.ak[1]}`
            let chickenItemImg = document.createElement("img")
            chickenItemImg.className = "chickenSlider__img"
            chickenItemImg.src = `image/${imgOpen.ak[0]}`
            let chickenItemText = document.createElement("p")
            chickenItemText.className = "chickenSlider__text"
            chickenItemText.innerText = `${imgOpen.ak[2]}`
            chickenSliderItem.appendChild(chickenItemImg)
            chickenSliderItem.appendChild(chickenItemText)
            chickenSlider.appendChild(chickenSliderItem)
        }
        if (rand > 80 && rand < 120) {
            let chickenSliderItem = document.createElement("div")
            chickenSliderItem.className = `chickenSlider__${imgOpen.gloves[1]}`
            let chickenItemImg = document.createElement("img")
            chickenItemImg.className = "chickenSlider__img"
            chickenItemImg.src = `image/${imgOpen.gloves[0]}`
            let chickenItemText = document.createElement("p")
            chickenItemText.className = "chickenSlider__text"
            chickenItemText.innerText = `${imgOpen.gloves[2]}`
            chickenSliderItem.appendChild(chickenItemImg)
            chickenSliderItem.appendChild(chickenItemText)
            chickenSlider.appendChild(chickenSliderItem)
        }
        if (rand > 120 && rand < 150) {
            let chickenSliderItem = document.createElement("div")
            chickenSliderItem.className = `chickenSlider__${imgOpen.M4A1[1]}`
            let chickenItemImg = document.createElement("img")
            chickenItemImg.className = "chickenSlider__img"
            chickenItemImg.src = `image/${imgOpen.M4A1[0]}`
            let chickenItemText = document.createElement("p")
            chickenItemText.className = "chickenSlider__text"
            chickenItemText.innerText = `${imgOpen.M4A1[2]}`
            chickenSliderItem.appendChild(chickenItemImg)
            chickenSliderItem.appendChild(chickenItemText)
            chickenSlider.appendChild(chickenSliderItem)
        }
        if (rand > 150 && rand < 200) {
            let chickenSliderItem = document.createElement("div")
            chickenSliderItem.className = `chickenSlider__${imgOpen.knife[1]}`
            let chickenItemImg = document.createElement("img")
            chickenItemImg.className = "chickenSlider__img"
            chickenItemImg.src = `image/${imgOpen.knife[0]}`
            let chickenItemText = document.createElement("p")
            chickenItemText.className = "chickenSlider__text"
            chickenItemText.innerText = `${imgOpen.knife[2]}`
            chickenSliderItem.appendChild(chickenItemImg)
            chickenSliderItem.appendChild(chickenItemText)
            chickenSlider.appendChild(chickenSliderItem)
        }
    }
}

function openCase() {
    let openRandom = random(0, 190)
    let firstSlideItem = chickenSlider.firstChild
        // firstSlideItem.animate({
        //         marginLeft: openRandom * widthSlide
        //     }, 2000)
    firstSlideItem.animate([{ transform: `translateX (${openRandom*widthSlide})` }], { duration: 1000 })
        // chickenSlider.scrollLeft = openRandom * widthSlide

}
// console.log(random(0, 100));


function random(min, max) {
    return Math.floor(Math.random() * max);
}