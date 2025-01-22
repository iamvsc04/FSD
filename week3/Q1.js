function greeter(name, callback) {
  console.log(`Hi !! ${name} `);
  callback(name);
}

function greetingMsg(name) {
  console.log(`We are Happy to see you ${name}`);
}

const name = "V Sai Charan";
greeter(name, greetingMsg);
