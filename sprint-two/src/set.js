var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  set.counter = 0;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this.storage[this.counter++] = item;
};

setPrototype.contains = function(item){
  var flag = false;
  _.each(this.storage, function(val, key, col){
    console.log(val);
    if(val === item){
      flag = true;
    }
  });
  return flag;
};

setPrototype.remove = function(item){
    _.each(this.storage, function(val, key, col){
    console.log(val);
    if(val === item){
      delete  col[key];
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
