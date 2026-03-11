const calculate = (arr) => {
  let stack = [];
  let operator = "+";

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (typeof curr == "number") {
      if (operator === "+") {
        stack.push(curr);
      } else if (operator === "-") {
        stack.push(-curr);
      } else if (operator === "*") {
        stack.push(stack.pop() * curr);
      } else if (operator === "/") {
        stack.push(stack.pop() / curr);
      }
    } else {
      operator = curr;
    }
  }
  return stack.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

export { calculate };
