// Code your solution in this file!
// Scuber HQ is located at 42nd Street
const headquarters = 42;

// Function to calculate distance in blocks from HQ
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - headquarters);
}

// Function to calculate distance in feet from HQ
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Function to calculate total feet traveled
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function to calculate fare price based on distance
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare for 2000-2500 feet
  } else {
    return 'cannot travel that far'; // Over 2500 feet is not allowed
  }
}

// Example test cases
console.log(distanceFromHqInBlocks(43)); // 1
console.log(distanceFromHqInFeet(43)); // 264
console.log(distanceTravelledInFeet(34, 38)); // 1056
console.log(calculatesFarePrice(34, 32)); // 0.56

