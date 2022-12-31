class UberPriceCalculator {
    static baseFare = 20.00;
    static perkmRate = 40.00;
    static perMinuteRate = 3.25;

    static calculatePrice(distance, duration) {

      return this.baseFare + distance * this.perkmRate + duration * this.perMinuteRate;
    }
}
const price = UberPriceCalculator.calculatePrice(10, 20);
console.log(price)