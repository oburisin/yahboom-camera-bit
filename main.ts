input.onButtonPressed(Button.A, function () {
    temp_s1 = s1
    temp_s1 += 45
    if (temp_s1 < 0) {
        temp_s1 = 0
        basic.showNumber(temp_s1)
    }
    s1 = temp_s1
    SuperBit.Servo2(SuperBit.enServo.S1, s1)
})
input.onButtonPressed(Button.AB, function () {
    s1 = 135
    basic.showNumber(s1)
    SuperBit.Servo2(SuperBit.enServo.S1, s1)
})
input.onButtonPressed(Button.B, function () {
    temp_s1 = s1
    temp_s1 += -45
    if (temp_s1 > 270) {
        temp_s1 = 270
        basic.showNumber(temp_s1)
    }
    s1 = temp_s1
    SuperBit.Servo2(SuperBit.enServo.S1, s1)
})
let temp_s1 = 0
let s1 = 0
basic.showIcon(IconNames.Happy)
s1 = 135
SuperBit.Servo2(SuperBit.enServo.S1, s1)
basic.forever(function () {
	
})
