var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var someInstance = {};

  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.remover = 0;

  _.extend(someInstance, queueMethods);

return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.counter++] = value;
};

queueMethods.dequeue = function(){
  return this.storage[this.remover++];
};
queueMethods.size = function(){
  if(this.remover > this.counter){
    this.remover = this.counter;
  }
  return this.counter - this.remover;
};


