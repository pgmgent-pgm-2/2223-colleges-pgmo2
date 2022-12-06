function job() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('hello world');
      }, 5000)
  })
}

function isOddNumber(number) {
  return new Promise((resolve,reject) => {
    if (isNaN(number)) {
      reject('error');
      return;
    }
    if(number % 2){
      setTimeout(() => {
        resolve('odd');
      }, 1000);
      return;
    } 
    setTimeout(() => {
      reject('even');
    }, 2000)
    
  });
}

const tryFunction = async () => {
  try{
    const promise = await isOddNumber('fsdf');
    console.log(promise);
  }
  catch(err){
    console.log(err);
  }

};

tryFunction();



