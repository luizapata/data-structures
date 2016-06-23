var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.size = function() {
  if(this.counter <= 0){
    this.counter = 0;
  }
  return this.counter;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter++] = value;
};

Stack.prototype.pop = function(){
  return this.storage[--this.counter]
};