const spaceShip = {
    name: "Enterprise",
    currentLocation: "Earth",
    flyDistance: 0,
    flyTo(place, distance) {
        this.currentLocation = place;
        this.flyDistance += distance;
        console.log(this.currentLocation);
        console.log(this.flyDistance);
    },
    // Show info about cruise travelling (actual place and all traveled distance)
    showInfo() {
        console.log(`Informacje o statku:
Statek ${this.name}
doleciał do miejsca ${this.currentLocation}.
Statek przeleciał już całkowity dystans ${this.flyDistance}km`)
    },
    // Making 100 draws between numbers 0 and 1. When result of draws is bigger than 50, we have one message in console and other message when result is under 50
    meetClingon() {
        const arrayNumbers = [];
        for (let i = 0; i < 100; i++) {
            let randomNumber = Math.floor(Math.random() * (1 - 0 + 1) + 0);
            arrayNumbers.push(randomNumber);
        }
        const drawsValue = arrayNumbers.reduce((a, b) => {
            return a + b;
        })
        console.log(drawsValue);
        if (drawsValue > 50) {
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`);
        } else {
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} został pokonany przez Klingonów`);
        }
    }
}
spaceShip.flyTo('Warszawa', 60);
spaceShip.showInfo();
spaceShip.meetClingon();