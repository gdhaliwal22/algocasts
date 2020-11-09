// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {}

class LinkedList {}
function matrix(n) {
    const results = [];
  
    for (let i = 0; i < n; i++) {
      results.push([]);
    }
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
  
    while (startCol <= endCol && startRow <= endRow) {
      // Top row
      for (let i = startCol; i <= endCol; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
  
      // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endCol] = counter;
        counter++;
      }
      endCol--;
  
      // Bottom row
      for (let i = endCol; i >= startCol; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
  
      // Start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startCol] = counter;
        counter++;
      }
      startCol++;
    }
    return results;
  }
  
  module.exports = matrix;
  
module.exports = { Node, LinkedList };
