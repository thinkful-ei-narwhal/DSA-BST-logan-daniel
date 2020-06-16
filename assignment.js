const BinarySearchTree = require('./BST');

// 1) We drew it.  Trust us!

// 2) We did it.  Trust us!

// 3) Implmented in BST.js

const BST = new BinarySearchTree();
const BSTTWO = new BinarySearchTree();

const numArr = [3, 1, 4, 6, 9, 2, 5, 7];
const EZ = ['E', 'A', 'S', 'Y', 'Q', 'U', 'E', 'S', 'T', 'I', 'O', 'N'];

numArr.forEach(num => BST.insert(num, num));
EZ.forEach(c => BSTTWO.insert(c, c));

// It seems to be the same, though I think it only shows the first level deep.

// 4) This accumulates all the values in a tree recursively. Using our BST, it would equal 37;

// 5) 

function findHeight(tree) {
  // if root is key
  if (!tree) {
    return 0;
  } else if (tree.key && !tree.left && !tree.right) {
    return 1;
  } else {
    let left = findHeight(tree.left) + 1;
    let right = findHeight(tree.right) + 1;
    if (left > right) {
      return left;
    } return right;
  }
}

// This is on average O(log(n))

// 6)

function isTree(tree) {
  if (!tree) {
    return false;
  } else if (tree.key && !tree.left && !tree.right) {
    return true;
  } else {
    if (tree.left > tree || tree.right < tree) {
      return false;
    } else {
      return isTree(tree.left) || isTree(tree.right);
    }
  }
}

// 7)

function thirdLargest(tree) {
  let arr = addToArr(tree).sort().reverse();
  if (arr.length < 2){
    return null;
  }
  return arr[2];

}


function addToArr(tree){
  let arr = [];
  if (!tree) {
    return arr;
  }
  arr.push(tree.key);
  return [...arr, ...addToArr(tree.left), ...addToArr(tree.right)];

}

// 8)


// 9)
