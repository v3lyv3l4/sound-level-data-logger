input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    Loudness = input.soundLevel()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Loudness)
})
let Loudness = 0
Loudness = 0
