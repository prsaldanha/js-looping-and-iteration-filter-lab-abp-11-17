// Code your solution in this file
function findMatching(drivers, name)
{
  return drivers.filter(function(name){ return drivers.name.toLowerCase() === name.toLowerCase();})
}