let count = 0
let sliderList = document.querySelector(".slider")
const widthSliderItem = 130;
let images = document.querySelectorAll(".slider__img")
let sliderInerval = setInterval(slider, 1000)
let widthItem = 130
const img = ["image/M4A1-S_1.png", "image/knife.png", "image/knife-fly.png", "image/gun.png", "image/ak_1.png", "image/Gloves.png", "image/weapon.png", "image/wep.png"]

function slider() {
    images = document.querySelectorAll(".slider__img")
    let sliderList = document.querySelector(".slider")
        // console.log(count);
        // images.push(images[images.length])
        // sliderList.style.left = -widthItem * count + "px"
        // sliderList[sliderList.length].appendChild(sliderList[0])
    count++

    if (count >= images.length) {
        count = 0
    }
    let firstSlide = sliderList.firstChild
    sliderList.removeChild(firstSlide)
    let lastSlide = sliderList.lastChild
    sliderList.appendChild(firstSlide)
}

sliderList.onmouseenter = function() {
    clearInterval(sliderInerval);
}
sliderList.onmouseleave = function() {
    sliderInerval = setInterval(slider, 1000)

}

function init() {
    widthSlider = document.querySelector(".container").offsetWidth;
    sliderList.style.width = "100%"
        // if ((widthSlider / widthSliderItem) > img.length) {
    let imgSlider = [...img]

    sliderList.replaceChildren()
    let countSliderItem = Math.ceil(widthSlider / widthSliderItem)
        // console.log(countSliderItem);

    for (let i = 0; i < countSliderItem; i++) {
        // console.log("hytfcvbcnhmjgtyuyr");
        imgSlider.push(img[i])
        let createSliderItem = document.createElement("div")
        createSliderItem.className = "slider__item"
        createSliderItem.innerHTML = `<img class="slider__img" src=${imgSlider[i]}>`
        sliderList.appendChild(createSliderItem)

        // console.log(i, "-----i");
        // console.log(countSliderItem, "-----countSliderItem");
        if (i === countSliderItem) break
    }
    images = document.querySelectorAll(".slider__img")
        // }
}
window.addEventListener("resize", init)
init()