function createProfile(obj) {
  let newObj = {};
  const { name, email } = obj;
  newObj.name = name;
  newObj.email = email;
  return newObj;
}

let p = {
  name: "vsc",
  age: 23,
  email: "saicharan@gmail.com",
  address: "pearl island",
};
console.log(createProfile(p));
