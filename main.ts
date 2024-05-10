/**
 * Starts both other loops and moves the finch, should end both loops when finished
 */
input.onButtonPressed(Button.A, function () {
    Moving = true
    finch.setMove(MoveDir.Forward, 20, 50)
    finch.resetEncoders()
    while (finch.getEncoder(RLDir.Left) < 4) {
        finch.startMotors(20, 0)
    }
    finch.setMove(MoveDir.Forward, 8, 50)
    finch.resetEncoders()
    while (finch.getEncoder(RLDir.Right) < 1) {
        finch.startMotors(0, 20)
    }
    for (let index = 0; index < 2; index++) {
        finch.setMove(MoveDir.Forward, 5, 50)
        finch.setTurn(RLDir.Left, 90, 25)
    }
    finch.setMove(MoveDir.Forward, 8, 50)
    finch.setTurn(RLDir.Right, 45, 25)
    finch.setMove(MoveDir.Backward, Math.sqrt(338), 50)
    finch.setTurn(RLDir.Left, 45, 25)
    Moving = false
})
/**
 * Starts finch, colors, and variables. Also Prints the first frame and resets the finch's encoders
 */
let Moving = false
finch.startFinch()
Moving = false
finch.setBeak(255, 0, 0)
finch.resetEncoders()
music.setTempo(97)
finch.setBeak(255 / 10, 153 / 10, 153 / 10)
finch.setTail(TailPort.All, 255 / 10, 153 / 10, 153 / 10)
let myImage = images.createImage(`
    # # # # #
    . . . . .
    # . . # #
    . . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    . . . . .
    . . # # #
    . . . . .
    # # # # #
    `)
/**
 * Loops "Welcome To The Black Parade" while the finch is moving
 */
basic.forever(function () {
    if (Moving) {
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(740, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(659, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    }
})
/**
 * Moves the image on screen
 */
basic.forever(function () {
    if (Moving) {
        myImage.scrollImage(-1, 200)
    }
})
