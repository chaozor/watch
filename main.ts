input.onButtonPressed(Button.A, function () {
    motion = 0
    basic.showNumber(motion)
})
input.onGesture(Gesture.Shake, function () {
    motion += 1
    basic.showNumber(motion)
})
let motion = 0
motion = 0
basic.showNumber(motion)
basic.forever(function () {
	
})
