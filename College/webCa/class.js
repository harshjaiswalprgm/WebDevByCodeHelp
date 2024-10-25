//write a promise function that will handling a promise function
 let promise1 = new Promise((resolve, reject) => {
     setTimeout(() => {
     resolve('Success');
     }, 2000);
 });

 let promise2 = new Promise((resolve, reject) => {
     setTimeout(() => {
         reject('Failed');
     }, 1000);
 });
let countValue = new Promise(function (resolve, reject) {
    let count = 0;
    let interval = setInterval(() => {
        count++;
        if (count === 5) {
            clearInterval(interval);
            resolve(count);
        }
    }, 1000);

})