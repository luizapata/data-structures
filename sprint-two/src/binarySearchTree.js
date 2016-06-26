var  BinarySearchTree = function(value){
var someInstance = {};
// someInstance.right = {};
// someInstance.left = {};
someInstance.value = value;
_.extend(someInstance, ioTreeMethods);
 return someInstance;
};

var ioTreeMethods = {};

ioTreeMethods.insert = function(input){

 function idk (node){

  if(input > node.value){
    if(!node.right){
      node.right = new BinarySearchTree(input)
    }else{
      idk(node.right);
    }
  }else{
    if(!node.left){
      node.left = new BinarySearchTree(input)
    }else{
      idk(node.left);
    }
  }
 };
 idk(this)
};

ioTreeMethods.contains = function(input){
  function yns (node){
    if(!node){
      return false
    }
    if(node.value === input){
      return true;
    }else{
      if(input > node.value){
         return yns(node.right);
      }else{
         return yns(node.left);
      }
    }
  };
  return yns(this)
};

ioTreeMethods.depthFirstLog = function (input){

};



/*
* Complexity: What is the time complexity of the above functions?
*/

    // if(input > node.value){
    //   if(node.right.value === input){
    //     flag = true;
    //   }
    //   yns(node.right);
    // }else{
    //   // console.log(node)
    //   if(node.left.value === input){
    //   flag = true;
    //   }
    //   yns(node.left);
    // }
    // console.log(flag);
  
