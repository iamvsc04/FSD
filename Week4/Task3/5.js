function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 complete");
      resolve();
    }, 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 complete");
      resolve();
    }, 800);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 complete");
      resolve();
    }, 500);
  });
}

async function executeTasks() {
  try {
    await task1();
    await task2();
    await task3();
    console.log("All tasks completed!");
  } catch (error) {
    console.error("Error:", error);
  }
}

executeTasks();
