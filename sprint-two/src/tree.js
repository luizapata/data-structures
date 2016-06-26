  var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = {}; 
  newTree.counter = 0;
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){

  this.children[this.counter++] = new Tree(value);
};

treeMethods.contains = function(target){
  var flag = false;
  function idk(child){
    _.each(child, function(obj, key){
      if(obj.value === target){
        flag = true;
        }
      idk(obj.children);
    });
  }
  idk(this.children);
  console.log(flag);
  return flag;
};







