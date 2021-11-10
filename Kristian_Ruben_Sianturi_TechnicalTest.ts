function countVocalInString(str: string) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === "A" || str[i].toUpperCase() === "I" || str[i].toUpperCase() === "U" || str[i].toUpperCase() === "E" || str[i].toUpperCase() === "O") {
      count++;
    }
  }

  return count;
}

function printNumber(first: number, last: number) {
  for (let i = first; i <= last; i++) {
    if ((i % 3 === 0) && (i % 7 === 0)) {
      console.log("OpenSource")
    } else if (i % 3 === 0) {
      console.log("Open");
    } else if (i % 7 === 0) {
      console.log("Source");
    } else {
      console.log(i);
    }
  }
}

function Max(list: Array<number>): number {
  let max: number = list[0];
  if (list.length > 1) {
    const next_max = Max(list.slice(1));
    if (next_max > max) {
      max = next_max;
    }
  }
  return max;
}

console.log(`Count Vocal from string 'Kristian Ruben Sianturi'`, countVocalInString("Kristian Ruben Sianturi"));

console.log("###########################\n");

printNumber(1, 99);

console.log("###########################\n");

console.log(`Max in list [2, 3, 5, 8, 7, 3, 9, 1, 3, 8, 6]`,Max([2, 3, 5, 8, 7, 3, 9, 1, 3, 8, 6]));