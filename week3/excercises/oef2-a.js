const userId = 1;

const data = [{ order: 1 }];

const signIn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve(userId);
        return;
      }
      reject("Could not succesfully sign in");
    }, 1000);
  });
};

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.length) {
        resolve(data.length);
        return;
      }
      reject("Could not succesfully fetch data");
    }, 1000);
  });
};

const renderDashboard = () => {
  console.log('Render dashboard');
};

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