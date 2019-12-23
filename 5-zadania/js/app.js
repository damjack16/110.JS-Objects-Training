const tableGenerator = {
    randomNumber(min, max) {
        const number = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(number);
        return number
    },
    generateIncTable(lng) {
        const newArr = [];
        for (let i = 0; i < lng; i++) {
            newArr.push(i);
        }
        console.log(newArr);
        return newArr
    },
    generateRandomTable(lng, min, max) {
        const randomArr = Array.from({
            length: lng
        }, () => Math.floor(Math.random() * (max - min + 1) + min));
        console.log(randomArr)
        return randomArr
    },
    generateTableFromText(str) {
        if (typeof str !== "string") {
            str = [];
            console.log(str)
            return str
        } else {
            console.log(str.split(" "))
        }
    },
    getMaxFromTable(arr) {
        const maxArr = Array.from(arr.toString()).map(Number)
        const maxNumber = Math.max(...maxArr);
        console.log(maxNumber)
    },

    getMinFromTable(arr) {
        const minArr = Array.from(arr.toString()).map(Number)
        const minNumber = Math.min(...minArr);
        console.log(minNumber)
    },
    delete(arr, index) {
        if (typeof arr === "number") {
            const delArr = Array.from(arr.toString()).map(Number);
            delArr.splice(index, 1);
            console.log(delArr);
        } else {
            const delArr = Array.from(arr);
            delArr.splice(index, 1);
            console.log(delArr);
        }
    },
}

tableGenerator.randomNumber(0, 100);
tableGenerator.generateIncTable(6);
tableGenerator.generateRandomTable(4, 1, 100);
tableGenerator.generateTableFromText('Witam jestem Damian')
tableGenerator.getMaxFromTable(12436344);
tableGenerator.getMinFromTable(12436344);
tableGenerator.delete("124124", 2)