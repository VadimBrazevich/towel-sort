
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (matrix == undefined) return [];
  let result = [];
  let reverse = false;

  matrix.forEach(row => {

    if(reverse) row.reverse();      
    result.push(...row);
    reverse = !reverse;
  });
  return result;
}
