// const { transform } = require("lodash")
let button = document.querySelector(".chickenSlider__button")
let chickenSlider = document.querySelector(".chickenSlider")
let widthSlide = 126
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
    const massSlider = reset()
    openCase(massSlider)
}



function reset() {
    let massChikenSlider = []
    chickenSlider.innerHTML = '';
    for (let i = 0; i < 200; i++) {
        let rand = random(1, 200)
            // console.log(rand);
        let chickenSliderItem = document.createElement("div")
        let chickenItemImg = document.createElement("img")
        chickenItemImg.className = "chickenSlider__img"
        let chickenItemText = document.createElement("p")
        chickenItemText.className = "chickenSlider__text"
        chickenSliderItem.appendChild(chickenItemImg)
        chickenSliderItem.appendChild(chickenItemText)
        chickenSlider.appendChild(chickenSliderItem)
        if (rand < 40) {
            massChikenSlider.push(imgOpen.fly[0])
            chickenSliderItem.className = `chikenSlider__item chickenSlider__${imgOpen.fly[1]} ${i}`
            chickenItemImg.src = `image/${imgOpen.fly[0]}`
            chickenItemText.innerText = `${imgOpen.fly[2]}`
        }

        if (rand >= 40 && rand <= 80) {
            massChikenSlider.push(imgOpen.ak[0])

            chickenSliderItem.className = `chikenSlider__item chickenSlider__${imgOpen.ak[1]}  ${i}`

            chickenItemImg.src = `image/${imgOpen.ak[0]}`

            chickenItemText.innerText = `${imgOpen.ak[2]}`

        }
        if (rand > 80 && rand < 120) {
            massChikenSlider.push(imgOpen.gloves[0])

            chickenSliderItem.className = `chikenSlider__item chickenSlider__${imgOpen.gloves[1]}  ${i}`

            chickenItemImg.src = `image/${imgOpen.gloves[0]}`

            chickenItemText.innerText = `${imgOpen.gloves[2]}`

        }
        if (rand >= 120 && rand <= 150) {
            massChikenSlider.push(imgOpen.M4A1[0])

            chickenSliderItem.className = `chikenSlider__item chickenSlider__${imgOpen.M4A1[1]}  ${i}`

            chickenItemImg.src = `image/${imgOpen.M4A1[0]}`

            chickenItemText.innerText = `${imgOpen.M4A1[2]}`

        }
        if (rand > 150 && rand <= 200) {
            massChikenSlider.push(imgOpen.knife[0])

            chickenSliderItem.className = `chikenSlider__item chickenSlider__${imgOpen.knife[1]}  ${i}`

            chickenItemImg.src = `image/${imgOpen.knife[0]}`

            chickenItemText.innerText = `${imgOpen.knife[2]}`
        }
    }
    return massChikenSlider
}

function openCase(massSlider) {
    let openRandom = random(40, 190)
    let firstSlideItem = chickenSlider.firstElementChild
    let widthSlider = chickenSlider.offsetWidth
        // console.log(firstSlideItem);
    firstSlideItem.style.marginLeft = `-${widthSlide*openRandom - (widthSlider/2)+(widthSlide/2)}px`
    const chickenMassItem = document.querySelectorAll(".chikenSlider__item")
    console.log(chickenMassItem[openRandom].className);
    // localStorage.setItem("user case", chickenMassItem[openRandom].className)
    let userCase = []
        // userCase = JSON.parse(localStorage.getItem("user case"))
    if (localStorage.getItem("user case")) {
        userCase = JSON.parse(localStorage.getItem("user case"))
    }
    userCase.push(massSlider[openRandom])
    localStorage.setItem("user case", JSON.stringify(userCase))
        // let test = JSON.stringify({ user: "qwe", age: 11 })
        // test = JSON.parse(test)
        // console.log(test);
        // let foo = localStorage.getItem("user case")
        // console.log(localStorage)
    console.log(massSlider);
    // alert(foo)
    // firstSlideItem.animate({
    //         marginLeft: openRandom * widthSlide
    //     }, 2000)
    // firstSlideItem.animate([{ transform: `translateX (${openRandom*widthSlide})` }], { duration: 1000 })
    // chickenSlider.scrollLeft = openRandom * widthSlide

}
// console.log(random(0, 100));


function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}