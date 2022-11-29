const a = () => new Promise((resolve) => setTimeout(() => resolve('a'), 1000));
const b = () => new Promise((resolve) => setTimeout(() => resolve('b'), 1000));
const c = () => new Promise((resolve) => setTimeout(() => resolve('c'), 1000));
const d = () => new Promise((resolve) => setTimeout(() => resolve('d'), 1000));

console.time('promise.all');
Promise.all([a(), b(), c(), d()])
  .then(results => console.log(`Done! ${results}`))
  .catch(console.error)
  .finally(() => console.timeEnd('promise.all'));
