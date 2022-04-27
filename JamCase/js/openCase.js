let button = document.querySelector(".chickenSlider__button")
let chickenSlider = document.querySelector(".chickenSlider")
const imgOpen = {
    fly: ["knife-fly.png", "knife-fly", "Нож-бабочка"],
    ak: ["ak_1.png", "ak", "StatTrak™ AK-47"],
    gloves: ["Gloves.png", "gloves", "Мотоциклетные"],
    M4A1: ["M4A1-S_1.png", "M4A1", "Сувенирный"],
    knife: ["knife.png", "knife", "Нож-бабочка"]
}

button.onclick = function() {
    chickenSlider.style.visibility = "visible"
    reset()

}


function reset() {

    for (let i = 0; i < 200; i++) {
        let rand = random(1, 100)
            // console.log(rand);

        if (rand < 2) {
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
        if (rand > 2 && rand < 5) {
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
    }
}
// console.log(random(0, 100));


function random(min, max) {
    return Math.floor(Math.random() * max);
}