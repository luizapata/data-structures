var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // console.dir(newTree.value)


  
  // your code here
  newTree.children = {};  // fix me
  newTree.counter = 0;

  _.extend(newTree, treeMethods);

  return newTree;

};

  // your code here
  // newTree.children = null;  // fix me

var treeMethods = {};

treeMethods.addChild = function(value){
console.log(Tree.newTree)
console.log(new Tree(value));
  this.children[this.counter++] = new Tree(value);
};

treeMethods.contains = function(target){
  var flag = false
  _.each(this.children, function(obj, key){
    if(obj.value === target){
      flag = true;
    }
  });
  return flag;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
























































// var Tree = function(value){
//   var newTree = {};
//   newTree.value = value;

  
//   // your code here
//   newTree.children = [];  // fix me

//   _.extend(newTree, treeMethods);

//   return newTree;

// };

//   // your code here
//   // newTree.children = null;  // fix me

// var treeMethods = {};

// treeMethods.addChild = function(value){

//   this.children.push({value: value});
// };

// treeMethods.contains = function(target){
//   var flag = false;
//   _.each(this.children, function(obj){
//     // console.log('val', object.value);

//     if(obj.value === target){
//       flag = true;
//     }
//     console.log(flag)
//     return flag;
//   });
// };






