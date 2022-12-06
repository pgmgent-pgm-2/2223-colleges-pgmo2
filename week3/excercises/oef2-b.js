const authToken = 12345;

const signIn = (token) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token) {
        resolve({
          id: token,
          firstName: 'Pol',
          lastName: 'De Tremmerie'
        });
        return;
      }
      reject("Could not succesfully sign in");
    }, 1000);
  });
};

const getData = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        orders: 5,
        total: 800
      }

      if(user && Object.keys(data).length) {
        resolve({
          ...user,
          ...data
        });
        return;
      }
      reject("Could not succesfully fetch data");
    }, 1000);
  });
};

const renderDashboard = ({firstName, lastName, orders, total}) => {
  console.log(`Je hebt het dashboard opgehaald van ${firstName} ${lastName}, hij heeft ${orders} orders geplaatst voor een waarde van ${total} euro.`)
};

const init = async () => {
  try {
    const userId = await signIn(authToken);
    const data = await getData(userId);
    await renderDashboard(data);
  } catch (err) {
    console.log(err);
  }
};

init();