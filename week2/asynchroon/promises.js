const isDadHappy = false;

const willIGetNewSmartphone = new Promise(
  (resolve, reject) => {
    if (isDadHappy) {
      resolve({
        brand: 'Xiaomi',
        color: 'Gradient Blue to Green'
      });
    } else {
      reject(('Dad is not happy'));
    }
  }
);

const showOff = function (phone) {
  return new Promise(
    (resolve, reject) => {
      const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone.`;
      resolve(message);
    }
  );
};



willIGetNewSmartphone
  .then((phone) => showOff(phone))
  .then((message) => console.log(message))
  .catch((error) => console.error(error))
  .finally(console.log('This was the story of my phone.'));


  // const willAlwaysBeFulfilled = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve('Done'), 1000);
  // });
  
  // console.log('Start');
  // willAlwaysBeFulfilled
  //   .then((data) => {
  //     console.log(data);
      
  //   })
  //   .catch((reason => {
      
  //   }))
  //   .finally(
  //     console.log('Promise checked')
  //   );
  // console.log('Finished');
  