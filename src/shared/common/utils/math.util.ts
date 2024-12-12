/**
 * Takes a number and rounds to a percission number
 *
 * @param num number to be rounded
 * @param decimalPlaces number of decimal places
 * @returns rounded number
 */
export function naiveRound(num: number, decimalPlaces = 2) {
    var p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
}