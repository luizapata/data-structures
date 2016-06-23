
 // Hey! Rewrite in the new style. Your code will wind up looking very similar,
 // but try not not reference your old code in writing the new style.
 // add storage {} and counter to someInstance {} so that they can be accessed from outside using this

  var Stack = function() {

  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.counter = 0;

  // extend some instance with our stackMethods
  _.extend(someInstance, stackMethods);

  // return someInstance to our stack function

  return someInstance;
  // Implement the methods below
  };

  //  create our methods object
  var stackMethods = {};


  // stack method uses this to make reference to properties within someInstance
  // then assigns the value of counter to assign a key to the storage object and gives it 
  // the value of our value parameter
  stackMethods.push = function(value){
    this.storage[this.counter++] = value;
  };

  stackMethods.pop = function(){
  
  if(this.counter-- <= 0){
    this.counter = 0;
  }
  return this.storage[this.counter];
  };

  stackMethods.size = function(){
  return this.counter;
  };

  

  
