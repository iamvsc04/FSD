function createProfile(obj, arr) {
  let { name, age } = obj;
  let [int1, int2, ...rest] = arr;

  return new Object({
    name: name,
    age: age,
    primaryIntrest: int1,
    secondaryIntrest: int2,
  });
}
