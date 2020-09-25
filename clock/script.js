setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hours-hand]')
const minuteHand = document.querySelector('[data-minutes-hand]')
const secondHand = document.querySelector('[data-seconds-hand]')
function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, housrRatio)

}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio*360)
}
setClock()