var GraphNode = function(name){
    this.name = name;
    this.visited = false;
    this.adjacentNodes = [];
};
GraphNode.prototype = {
    addAdjacentNode:function(node){
        this.adjacentNodes.push(node);
    },
    getUnvisitedNode:function(){
        for(var i=0;i<this.adjacentNodes.length;i++){
            if(!this.adjacentNodes[i].visited)
                return this.adjacentNodes[i];
        }
        return null;
    },
    breadthFirstTraversal:function(){
        var queue = new Queue();
        console.log(this.name);
        this.visited = true;
        queue.add(this);
        while(queue.peek() != null){
            var graphNode = queue.get();
            var adjacentNode = graphNode.getUnvisitedNode();
            while(adjacentNode != null){
                console.log(adjacentNode.name);
                adjacentNode.visited = true;
                queue.add(adjacentNode);
                adjacentNode = graphNode.getUnvisitedNode();
            }
        }
    },
    depthFirstTraversal:function(){
        var stack = new Stack();
        console.log(this.name);
        this.visited = true;
        stack.push(this);
        while(stack.peek() != null){
            var graphNode = stack.peek();
            var adjacentNode = graphNode.getUnvisitedNode();
            if(adjacentNode != null){
                console.log(adjacentNode.name);
                adjacentNode.visited = true;
                stack.push(adjacentNode);
                adjacentNode = graphNode.getUnvisitedNode();
            }else
                stack.pop();
        }
    }
}