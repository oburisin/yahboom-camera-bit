input.onButtonPressed(Button.A, function () {
    temp_s1 = s1
    temp_s1 += -5
    if (temp_s1 < 0) {
        temp_s1 = 0
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
    }
    s1 = temp_s1
    SuperBit.Servo(SuperBit.enServo.S1, s1)
    SuperBit.Servo(SuperBit.enServo.S2, s1)
})
input.onButtonPressed(Button.AB, function () {
    s1 = 90
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    SuperBit.Servo(SuperBit.enServo.S1, s1)
    SuperBit.Servo(SuperBit.enServo.S2, s1)
})
input.onButtonPressed(Button.B, function () {
    temp_s1 = s1
    temp_s1 += 5
    if (temp_s1 > 180) {
        temp_s1 = 180
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            `)
    }
    s1 = temp_s1
    SuperBit.Servo(SuperBit.enServo.S1, s1)
    SuperBit.Servo(SuperBit.enServo.S2, s1)
})
input.onGesture(Gesture.Shake, function () {
	
})
let temp_s1 = 0
let s1 = 0
basic.showIcon(IconNames.Happy)
s1 = 90
SuperBit.Servo(SuperBit.enServo.S1, s1)
SuperBit.Servo(SuperBit.enServo.S2, s1)
basic.forever(function () {
	
})
