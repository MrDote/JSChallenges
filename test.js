const arguments = [1, 2, 3];
const arr = () => arguments[0];

arr(); // 1

function foo(n) {
  const f = () => arguments[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}

foo(3); // 3 + 3 = 6