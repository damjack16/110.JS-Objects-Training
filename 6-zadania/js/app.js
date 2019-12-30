const text = {
    check(txt, word) {
        if (txt.includes(word)) {
            console.log(`Słowo "${word}" znajduje się w stringu`)
            return true
        } else {
            console.log("Nie ma tego słowa w stringu")
            return false
        }
    },

    getCount(txt) {
        console.log(`String ma ${txt.length} znaków`)
    },

    getWordsCount(txt) {
        console.log(`String posiada ${txt.split(" ").length} słów`)
        return txt.split(" ").length
    },

    setCapitalize(txt) {
        const splitStr = txt.split(' '); //Return array only with words. Without space
        for (let i = 0; i < splitStr.length; i++) {
            // Get first character of each element (charAt) from Array and set it to UpperCase. Then add rest of word by substring
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    },

    generateRandom(lng) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        for (let i = 0; i < lng; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }
}

text.check("Witaj człowieku", "Witaj");
text.getCount("Witam, co u Ciebie?");
text.getWordsCount("Witam was w rzeczywistości");
console.log(text.setCapitalize("Witam was serdecznie!"));
console.log(text.generateRandom(5));