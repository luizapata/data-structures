

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.graph = {};
  this.counter = 0;
  this.edges = {};
  this.edgeCounter = 0;

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  // console.log(this.counter)
  this.graph[this.counter++] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var flag = false;
    _.each(this.graph, function(pet){
      if(pet === node){
        flag = true;
      }
    });
  return flag;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  // console.log(this.graph)
  _.each(this.graph, function(val, key, collection){
    if(val === node){
      delete collection[key];
    }
  });
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var flag = false;
  _.each(this.edges, function(val, key, collection){
    if(val[0] === fromNode || val[0] === toNode){
      if(val[1] === fromNode || val[1] === toNode){
        flag = true;
      }
    }
  });
  return flag;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges[this.edgeCounter++] = [fromNode,toNode];
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  _.each(this.edges, function(val, key, col){
    if(val[0] === fromNode || val[0] === toNode){
      if(val[1] === fromNode || val[1] === toNode){
        delete col[key];
      }
    }
  });
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this.graph, function(val, key, col){
    cb(val);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



