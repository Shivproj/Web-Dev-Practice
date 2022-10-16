let n = 5;
let str1 = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    str1 += "*";
  }
  str1 += "\n";
}
console.log(str1);

let str2 = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    str2 += "*";
  }
  str2 += "\n";
}
console.log(str2);

let str3 = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    str3 += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    str3 += "*";
  }
  str3 += "\n";
}
console.log(str3);

let str4 = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    str4 += "*";
  }
  str4 += "\n";
}
console.log(str4);

let str5 = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === 0 || i === n - 1) {
      str5 += "*";
    } else {
      if (j === 0 || j === n - 1) {
        str5 += "*";
      } else {
        str5 += " ";
      }
    }
  }

  str5 += "\n";
}

console.log(str5);
