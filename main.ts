input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 20, 50)
    while (20 + 20 * Math.PI != finch.getDistance()) {
        finch.startMotors(20, 0)
    }
    finch.setMove(MoveDir.Forward, 8, 50)
    finch.setTurn(RLDir.Left, 90, 50)
})
finch.startFinch()
finch.resetEncoders()
