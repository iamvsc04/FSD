function main(callback) {
  setTimeout(() => {
    console.log("in main1");
    callback();
  }, 1000);
}

function main2(callback) {
  setTimeout(() => {
    try {
      let a = 5,
        b = 10;
      if (a !== b) throw new Error("Values do not match in main2");
      console.log("in main2");
      callback();
    } catch (error) {
      console.log("Error raised in main2 function:", error.message);
    }
  }, 600);
}

function main3(callback) {
  setTimeout(() => {
    console.log("in main3");
    callback();
  }, 500);
}

main(() => {
  main2(() => {
    main3(() => {
      console.log("Final execution done!");
    });
  });
});
