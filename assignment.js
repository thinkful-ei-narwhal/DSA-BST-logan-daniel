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

function balancedBST(tree) {
  if (!tree){
    return null;
  }
  if (!tree.left) {
    return !(tree.right && (tree.right.left || tree.right.right));
  }
  if (!tree.right) {
    return !(tree.left && (tree.left.left || tree.left.right));
  }

  return balancedBST(tree.left) && balancedBST(tree.right);
}

// 9)

// 3, 5, 4, 6, 1, 0, 2  -> base -> leftArr 1, rightArr 5
// 3, 1, 5, 2, 4, 6, 0  -> equal -> leftArr 1, rightArr 5
// 3, 6, 4, 5, 1, 0, 2 -> not equal -> left 1, right 6

function areTheSame(arrOne, arrTwo) {
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  if (arrOne[0] !== arrTwo[0]) {
    return false;
  }

  let base = arrOne[0];
  let leftArrOne = [];
  let rightArrOne = [];
  let leftArrTwo = [];
  let rightArrTwo = [];

  for (let i = 1; i < arrOne.length; i++) {
    if (arrOne[i] > base) {
      rightArrOne.push(arrOne[i]);
    } else {
      leftArrOne.push(arrOne[i]);
    }

    if (arrTwo[i] > base) {
      rightArrTwo.push(arrTwo[i]);
    } else {
      leftArrTwo.push(arrTwo[i]);
    }
  }

  if (rightArrOne.length !== rightArrTwo.length){
    return false;
  }

  if (leftArrOne.length !== leftArrTwo.length){
    return false;
  }

  for (let i = 0; i < rightArrOne.length; i++){
    if (rightArrOne[i] !== rightArrTwo[i]) {
      return false;
    }
  }

  for (let i = 0; i < leftArrOne.length; i++){
    if (leftArrOne[i] !== leftArrTwo[i]) {
      return false;
    }
  }

  return true;

}

// tine complexity is O(n) linear but there are 3 of them.  Best case is constant,
// worst is 3n.