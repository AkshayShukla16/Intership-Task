
const myPromise = new Promise((resolve, reject) => {
  
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
    
      resolve(`Success! Random number: ${randomNumber}`);
    } else {
      // Reject the promise if the condition is not met
      reject(`Error! Random number: ${randomNumber}`);
    }
  }, 1000); // Simulating a 1-second delay
});


myPromise
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error(error); 
  });
