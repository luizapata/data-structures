var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var remover = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
     storage[counter++] = value;
  };

  someInstance.dequeue = function(){
    return storage[remover++] ;
  };

  someInstance.size = function(){
    if(counter - remover <= 0){
      return 0
    }else{
    return counter - remover;
    }
  };

  return someInstance;
};
