function Function1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 1 complete");
      resolve();
    }, 1000);
  });
}

function Function2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Function 2 complete");
      resolve();
    }, 800);
  });
}

Function1()
  .then(() => Function2())
  .then(() => console.log("All Functions completed!"))
  .catch((err) => console.error("Error:", err));
