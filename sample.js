const dfs = (list, start, end, visitedList) => {
  if(start === end) return [start];
  const currNode = list[start];
  if (!currNode) return [];
  for (let i = 0; i < currNode.length; i++) {
    if (!visitedList.includes(currNode[i])) {
      visitedList.push(currNode[i]);
      const path = dfs(list, currNode[i], end, visitedList);
      if (path.includes(end)) {
        path.unshift(start);
        return path;
      }
    }
  }
  return [];
};

const createGraph = details => {
  const graph = {};
  details.forEach(data => {
    if (!graph[data[0]]) {
      graph[data[0]] = [data[1]];
    } else graph[data[0]].push(data[1]);
  });
  return graph;
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
  const directedList = createGraph(pairs);
  const path = dfs(directedList, 1, 4, []);
  console.log(path);
};
main();
