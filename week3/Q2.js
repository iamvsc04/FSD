function mul(num, callback) {
  console.log(`result after multiplication ${num * 2}`);
  let temp = num * 2;
  callback(temp);
}
function sub(num, callback) {
  console.log(`result after subtratcion ${num - 3}`);
  callback(num - 3);
}

function add(num) {
  console.log(`result after addition ${num + 10}`);
}

const num = 42;
mul(num, (resNum) => {
  sub(resNum, (tnum) => {
    add(tnum);
  });
});
