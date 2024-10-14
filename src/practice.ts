const runAfter1s = (fn: () => void): void => {
  setTimeout(fn, 1000);
};

runAfter1s(() => console.log('hello'));
