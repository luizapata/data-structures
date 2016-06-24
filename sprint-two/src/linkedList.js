var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

// add to tail adds the passed in argument as a value to the tail key in our list object

  list.addToTail = function(value){
    //adds an object to list. tail by invoking node. 
    list.tail = Node(value);
    // checks if there is a head. If not, assign tail to head.
    if(!list.head){
      list.head = list.tail;
    }
  };


  list.removeHead = function(){
    // saves the value of head into a variable.
    var former = list.head.value;
    // moves tail to head.
    list.head = list.tail;
    // returns former head.
    return former;
  };

  list.contains = function(target){
    // check if the value of head or tail matches target if so return true else return false.
    if(list.head.value === target || list.tail.value === target){
      return true;
    };
    return false
  };
  // return list
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
