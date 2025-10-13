input.onButtonPressed(Button.A, function () {
    s1 += 5
})
input.onButtonPressed(Button.B, function () {
    s1 += -5
})
let s1 = 90
let s2 = 90
SuperBit.Servo2(SuperBit.enServo.S1, s1)
SuperBit.Servo2(SuperBit.enServo.S2, s2)
basic.forever(function () {
    SuperBit.Servo2(SuperBit.enServo.S1, s1)
})
