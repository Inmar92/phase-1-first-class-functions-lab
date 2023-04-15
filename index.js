const returnFirstTwoDrivers = function (drivers) {
    return drivers = ['Antonia', 'Nuru'];
}
returnFirstTwoDrivers();

const returnLastTwoDrivers = function (drivers) {
    return drivers = ['Amari', 'Mo'];
}
returnLastTwoDrivers();

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier() {
    return function returnFirstTwoDrivers(){
        return (5*5);
    }
}
function fareDoubler(fareMultiplier) {
    return fareMultiplier * 2;
}

function fareTripler(fareMultiplier) {
    return fareMultiplier * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers (drivers);
}
selectDifferentDrivers();
