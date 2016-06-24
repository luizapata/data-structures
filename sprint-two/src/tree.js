var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // console.dir(newTree.value)


  
  // your code here
  newTree.children = {};  // fix me
  newTree.counter = 0;

  _.extend(newTree, treeMethods);

  // console.dir                                                                                                                                                                                                                                                                                                                                                                                                                                     (newTree)
  return newTree;

};

  // your code here
  // newTree.children = null;  // fix me

var treeMethods = {};

treeMethods.addChild = function(value){
// console.log(Tree.newTree)
// console.log(new Tree(value));
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



// // console.log(Tree.newTree)
// // console.log(new Tree(value));
//   this.children[this.counter++] = new Tree(value);
// };

// treeMethods.contains = function(target){
//   var flag = false;

//   function idk(child){
//     if(child.value === target){
//       flag = true;

//     }else if(typeof child.value === 'object'){
//       _.each(child.children, function(obj){
//         console.log(key)
//         idk(obj);
//       });
//     }

//   }

//   idk(this.children);

//   // console.log(flag);
//   return flag;

  //   _.each(child, function(obj){
  //     // console.log('key',key);
  //   if(typeof obj === 'object'){
  //     // console.log('me',obj.children.value);
  //     idk(obj.value);

  //   }else if(obj.value === target){
  //       flag = true;
  //   }
  // });
  // var flag = false
  // _.each(this.children, function(obj, key){
  //   if(obj.value === target){
  //     flag = true;
  //   }
  // });
  // return flag;

/*
 * Complexity: What is the time complexity of the above functions?
 */





  // var flag = false;

  // function idk(child){
  //   _.each(this.children, function(obj, key){

  //   if(typeof obj.value === 'object'){

  //     idk(obj);

  //   }else{

  //     if(obj.value === target){
  //       flag = true;
  //     }
  //   }
  // });
  // }

  // idk(this.children);

  // console.log(flag);
  // return flag;





  // var flag = false
  // _.each(this.children, function(obj){
  //   if(typeof obj.value === 'object'){
  //     contains(obj);
  //   }
  //   if(obj.value === target){
  //     flag = true;
  //   }
  // });
  // return flag;








































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






