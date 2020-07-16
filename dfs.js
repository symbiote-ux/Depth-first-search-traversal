const dfs = (list, src, target, visitedList = []) => {
  if (src === target) {
    return [target];
  }
  if (!list[src]) return [];
  visitedList.push(src);
  for (curr of list[src]) {
    if (!visitedList.includes(curr)) {
      const stack = dfs(list, curr, target, visitedList);
      if (stack.includes(target)) {
        stack.unshift(src);
        return stack;
      }
    }
  }
  return [];
};

const createAdjList = content => {
  const adjList = {};
  content.forEach(pair => {
    const from = pair[0];
    const to = pair[1];
    if (adjList[from]) {
      adjList[from].push(to);
    } else {
      adjList[from] = [to];
    }
  });
  return adjList;
};

const main = () => {
  const pairs = [
    [1, 2],
    [1, 6],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 3]
  ];
  const adjList = createAdjList(pairs);
  const path = dfs(adjList, 1, 6);
  console.log(path);
};

main();
