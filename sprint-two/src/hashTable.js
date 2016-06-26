var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(typeof this._storage[i] === 'undefined'){
    this._storage[i] = {};
  }
  this._storage[i][k] = v;
  console.log(this._storage)
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i].hasOwnProperty(k)){
    return this._storage[i][k];
  }else{
    return null
  };
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i].hasOwnProperty(k)){

     delete this._storage[i][k];
    // console.log(this._storage[i]);
  };
}; 



/*
 * Complexity: What is the time complexity of the above functions?
 */
