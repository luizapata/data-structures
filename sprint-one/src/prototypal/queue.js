var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.remover = 0;
  someInstance.counter = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.size = function(){
  if(this.counter - this.remover <= 0){
      this.remover = this.counter
  }
  return this.counter - this.remover;
};

queueMethods.enqueue = function(value){
  this.storage[this.counter++] =  value;
};

queueMethods.dequeue = function(){
  return this.storage[this.remover++]
};


