//Binary Tree
var BinaryTree = function(object){
    this.parent = null;
    this.left = null;
    this.right = null;
    this.value = object;
    this.visited = false;
};
BinaryTree.prototype = {
    addLeft:function(object){
        var bNode = new BinaryTree(object);
        bNode.parent = this;
        this.left = bNode;
    },
    addRight:function(object){
        var bNode = new BinaryTree(object);
        bNode.parent = this;
        this.right = bNode;
    },
    inorder:function(){
        if(this.left)this.left.inorder();
        console.log(this.value);
        if(this.right)this.right.inorder();
    },
    preorder:function(){
        console.log(this.value);
        if(this.left)this.left.preorder();
        if(this.right)this.right.preorder();
    },
    postorder:function(){
        if(this.left)this.left.postorder();
        if(this.right)this.right.postorder();
        console.log(this.value);
    },
    breadthFirstTraversal:function(){
        var queue = new Queue();
        console.log(this.value);
        this.visited = true;
        queue.add(this);
        while(queue.peek() != null){
            var tree = queue.get();
            if(tree.left != null && !tree.left.visited){
                tree.left.visited = true;
                console.log(tree.left.value);
                queue.add(tree.left);
            }
            if(tree.right != null && !tree.right.visited){
                tree.right.visited = true;
                console.log(tree.right.value);
                queue.add(tree.right);
            }
        }
    },
    depthFirstTraversal:function(){
        var stack = new Stack();
        console.log(this.value);
        this.visited = true;
        stack.push(this);
        while(stack.peek() != null){
            var tree = stack.peek();
            if((tree.left != null && !tree.left.visited) || (tree.right != null && !tree.right.visited)){
                if(tree.left != null && !tree.left.visited){
                    tree.left.visited = true;
                    console.log(tree.left.value);
                    stack.push(tree.left);
                }else {
                    tree.right.visited = true;
                    console.log(tree.right.value);
                    stack.push(tree.right);
                }
            }else
                stack.pop();
        }
    }
};