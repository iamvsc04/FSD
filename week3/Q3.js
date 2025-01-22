function delayedMessage(msg, delay) {
  setTimeout(() => {
    console.log(msg);
  }, delay);
}

delayedMessage("hi there !!", 100);
