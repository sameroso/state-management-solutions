// @ts-ignore
let obj1 = {
  a: 1,
  b: { c: 2, d: 3 },
};

let obj2 = { ...obj1, a: 2 };

console.log(obj1 === obj2);

console.log(obj1.b === obj2.b);
