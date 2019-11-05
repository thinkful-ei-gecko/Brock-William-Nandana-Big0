// 1 Count Sheep
function countSheep(sheep) {
  //base case
  if (sheep === 0) {
    return;
  }
  console.log(sheep);

  //general case
  countSheep(sheep - 1);
}
countSheep(5);

// 1 Count Sheep solved iterativly
function countSheep(sheep) {
  let count = sheep;
  for (i = 0; i < sheep; i++) {
    console.log(count);
    count--;
  }
}
countSheep(5);

// 2 Power Calculator
function powerCalculator(int, exp) {
  if (exp === 0) {
    return;
  } else {
    base = int ** exp;
    console.log(base);

    return powerCalculator(int, exp - 1);
  }

  console.log(powerCalculator);
}

powerCalculator(10, 3);

// 2 Power Calc solved iterativly
function powerCalculator(int, exp) {
  base = int ** exp;
  console.log(base);
}

powerCalculator(10, 3);

// 3 Reverse string
function reverseString(str) {
  if (str === "") {
    return "";
  }
  const newChar = str[str.length - 1];
  return newChar + reverseString(str.slice(0, str.length - 1));
}

// 3 Reverse String iterative solution
function reverseString(string) {
  let reverseString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }

  return reverseString;
}

console.log(reverseString("hello"));

// 4 nth triangle number
function nTriangularNumber(num) {
  if (num === 0) {
    return null;
  }

  return num + nTriangularNumber(num - 1);
}

// 4 Nth Triagnle NUmber iterative solution
function triangluarNumber(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

console.log(triangluarNumber(4));

// 5 Sting Splitter
function pathSplitter(str, seperator) {
  if (str.indexOf(seperator) === -1) {
    return [str];
  }

  return [str.slice(0, str.indexOf(seperator))].concat(
    pathSplitter(
      str.slice(str.indexOf(seperator) + seperator.length),
      seperator
    )
  );
}
pathSplitter("02/20/2020", "/");

// 5 String splittler iterative solution
function stringSplitter(string, separator) {
  if (string.length === 0) {
    return "";
  }

  let result = [];
  let index = string.indexOf(separator); //2
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(separator) !== -1) {
      result.push(string.slice(0, index));
    } else {
      result.push(string);
    }
    string = string.slice(index + 1);
  }
  return result;
}

console.log(stringSplitter("02/02/2020", "/"));

// 6 Fibonacci recursive
function fibonacci(num) {
  if (num <= 1) return num;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

fibonacci(7);

//6 Fibonaaci Iterative solution
function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

fibonacci(7);

// 7 factorial recursive
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

//7 Factorial service iterative solution
function factorial(number) {
    let product = 1;
    for(let i = 1; i <= number; i++) {
      product *= i;
    }
    return product;
  }
  
  console.log(factorial(5));
  
// Maze worker
const wayOut = (maze, column, row, path = []) => {
  let exitY = maze[0].length - 1;
  let exitX = maze.length - 1;

  if (column === exitX && row === exitY) {
    return path;
  }

  if (column < exitY && path[path.length - 1] !== "L") {
    if (maze[column][row + 1] === " " || maze[column][row + 1] === "e") {
      path.push("R");
      return wayOut(maze, column, row + 1, path);
    }
  }
  if (column < exitX && path[path.length - 1] !== "U") {
    if (maze[column + 1][row] === " " || maze[column + 1][row] === "e") {
      path.push("D");
      return wayOut(maze, column + 1, row, path);
    }
  }
  if (row > 0 && path[path.length - 1] !== "R") {
    if (maze[column][row - 1] === " " || maze[column][row - 1] === "e") {
      path.push("L");
      return wayOut(maze, column, row - 1, path);
    }
  }
  if (column > 0 && path[path.length - 1] !== "D") {
    if (maze[column - 1][row] === " " || maze[column - 1][row] === "e") {
      path.push("U");

      return wayOut(maze, column - 1, row, path);
    }
  }
};

var myMaze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"]
];

console.log(wayOut(myMaze, 0, 0));
