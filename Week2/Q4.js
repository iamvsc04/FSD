function mergeUserData(userDetails, userAddress, userPreferences) {
  let obj = { ...userDetails, ...userAddress, ...userPreferences };
  return obj;
}
const userDetails = { name: "CVR", age: 25 };
const userAddress = { address: "Mangalpally", city: "Hyderabad" };
const userPreferences = { theme: "Engineerin Edu", language: "EN" };

console.log(mergeUserData(userDetails, userAddress, userPreferences));
