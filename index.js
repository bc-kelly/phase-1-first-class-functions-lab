// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    return drivers.slice(0,2);
}

function returnLastTwoDrivers() {
    return (drivers.slice(2));
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare) {
    return multiplier * fare;
}
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


/*function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return drivers.slice(0,2); 
}
function selectDifferentDrivers(arrayOfDrivers, returnLastTwoDrivers) {
    return drivers.slice(2);
}

*/

const selectDifferentDrivers = function (arrayOfDrivers, driversToReturn) {
    return driversToReturn(arrayOfDrivers);
};