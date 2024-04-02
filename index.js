// Code your solution in this file!

 const drivers=['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers)
{

  return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers)
{
  
  return drivers.slice(-2);

}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
}
}
function fareDoubler(){
  return 10*2;
}
function fareTripler(){
  let x=12;
  return x*3;////36
}
function selectDifferentDrivers(drivers, func)
{
  return func(drivers);
}
