input.onPinPressed(TouchPin.P0, function () {
    scnd += 1
    basic.showNumber(scnd)
})
input.onButtonPressed(Button.A, function () {
    first += 1
    basic.showNumber(first)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(scnd)
    basic.showNumber(first)
})
input.onButtonPressed(Button.B, function () {
    first += -1
    basic.showNumber(first)
})
input.onPinPressed(TouchPin.P1, function () {
    scnd += -1
    basic.showNumber(scnd)
})
let scnd = 0
let first = 0
basic.showNumber(first + scnd)
basic.forever(function () {
	
})
