function pangram(sentance) {

    for ( let char of 'abcdefghijklmnopqrstuvwxyz') {
        if ( sentance.indexOf(char) === -1 ) {
            return false
        }

        
    }

    return true
}

console.log( pangram("abcdefghijklmnopqrsuvxyz"))