//8. Design a method to return nth smallest element. 

let small = [20, 32, 42, 34, 33, 12, 23, 56, 65, 27];
let asending = [];
let nth = prompt("Enter the length  :")

for (let i = 0; i < small.length; i++) {
  for (let j = 0; j < small.length - i - 1; j++) {
    if (small[j] > small[j+1]) {
      asending = small[j];
      small[j] = small[j+1];
      small[j+1] = asending;
    }
  }
}
console.log(small);
console.log(small[nth-1]);