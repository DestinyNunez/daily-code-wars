/*Complete the function which accepts an integer, and returns the name of the finger on which the counting will end: "Thumb", "Index finger", "Middle finger", "Ring finger", or "Little finger".


*/

function whichFinger(n){
    let a = 1
    let b = 2
    let c = 3
    let d = 4
    let e = 5

    for (let i = 0; i < Infinity; i++) {
        a += 8
        if (n === a) {
            return 'Thumb'
        }

        b += 6
        if (n === b) {
           return 'Index finger'
        }

        b += 2
        if (n === b) {
            return 'Index finger'
        }

        c += 4
        if (n === c) {
            return 'Middle finger'
        }

        d += 2
        if (n === d) {
            return 'Ring finger'
        }
        d += 6
        if (n === d) {
            return 'Ring finger'
        }

        e += 8
        if (n === e) {
            return 'Little finger'
        }
    }
}