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

let obj = { name: "Sai Charan", age: 20, id: "220" };

let arr = ["dev", "ui/ux", "blockchain"];

console.log(createProfile(obj, arr));
