radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 160)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 160)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 2) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, -160)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, -160)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (receivedNumber == 3) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 160)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 30)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (receivedNumber == 4) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 30)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 160)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (receivedNumber == 5) {
        motor.motorStopAll()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
radio.setGroup(25)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
