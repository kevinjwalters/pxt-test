// The namespace determines the section which in MakeCode world is
// referred to as a drawer
// For most editors this appears with the first character uppercase
// and the rest lowercase
// Adafruit's is all caps for some reason but when the draw is opened
// the name at the top appears like the other editors

namespace testyMcTestface {
    /*
     * Multi-line comment
     * Why does example code on https://learn.adafruit.com/custom-extensions-for-makecode/custom-blocks have
     * two asterisks on the first line
     */

    //% block
    export function sayHi() {
        game.splash("Hello", "World!");
    }
}
