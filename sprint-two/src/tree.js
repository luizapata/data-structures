var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods)
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(new Tree(value))

};

treeMethods.contains = function(target){
  var found = false;

  var checksTarget = function(node){
    if(node.value === target){
      found = true;
      return;
    }
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      checksTarget(child);
    }
  }
checksTarget(this)
return found;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
