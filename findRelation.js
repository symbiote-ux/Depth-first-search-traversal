const fs = require('fs');

const findRelation = (adjacentList, from, to) => {
  const visitedList = [];
  const queue = [];
  queue.push(from);
  while (queue.length != 0) {
    const currentPath = queue.shift();
    if (currentPath === to) return true;
    visitedList.push(currentPath);
    adjacentList[currentPath].forEach(path => {
      if (!visitedList.includes(path) && !queue.includes(path)) queue.push(path);
    });
  }
  return false;
};

const createList = content => {
  const list = {};
  content.forEach(pair => {
    if (!list[pair[0]]) list[pair[0]] = [pair[1]];
    else list[pair[0]].push(pair[1]);
  });
  return list;
};

const main = () => {
  const data = fs.readFileSync('./data.txt', 'utf8').split('\n');
  const content = data.map(e =>
    e
      .split('|')
      .map(e => e.trim())
      .splice(1, 2)
  );
  const adjacentList = createList(content);
  const result = findRelation(adjacentList, 'mm', 'jj');
  console.log(result);
};

main();
