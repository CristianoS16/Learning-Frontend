const numbersArray: Array<number> = [1, 2, 3, 4, 5];
console.log(numbersArray);

async function promiseAsync() {
  return 1;
}
promiseAsync().then((result) => console.log(result + 1));

type MyType = number;
function myPromise(): Promise<MyType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}
myPromise().then((result) => console.log(result + 1));
