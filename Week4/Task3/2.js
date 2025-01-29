function main(callback) {
  callback();
  setTimeout(() => {
    console.log("in main1");
  }, 1000);
}

function main2(callback) {
  if (a != b) throw ErrorEvent;
  else {
    setTimeout(() => {
      console.log("in main2");
    }, 600);
    callback();
  }
}

function main3() {
  setTimeout(() => {
    console.log("in main3");
  }, 500);
}

main(() => {
  try {
    main2(() => {
      try {
        main3();
      } catch {
        console.log("Error raised in main 3 fucntion");
      }
    });
  } catch {
    console.log("error raised in main 2 function");
  }
});
