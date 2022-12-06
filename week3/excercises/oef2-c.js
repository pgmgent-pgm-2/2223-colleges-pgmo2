const userId = 1;
const data = [{ order: 1 }];

function signIn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve(userId);
      } else {
        reject("Could not succesfully sign in");
      }
    }, 1000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.length) {
        resolve(data.length);
      } else {
        reject("Could not succesfully fetch the data");
      }
    }, 1000);
  });
}

function renderDashboard() {
  console.log("Render the dashboard!");
}

const init = async () => {
  try {
    const userId = await signIn();
    const data = await getData();
    const render = await renderDashboard();
  } catch (err) {
    console.log(err);
  }
};

init();
