(function(){
    //Stack
    var Stack = function(){
        this.len = 0;
        this.objects = new Array(500); // Array of 500
    };
    Stack.prototype = {
        push: function(object){
            this.objects[this.len] = object;
            this.len++;
        },
        pop: function(){
            if(this.len > 0){
                var object = this.objects[this.len-1];
                delete this.objects[this.len-1];
                this.len--;
                return object;
            }else
                return null;
        },
        peek: function(){
            if(this.len > 0){
                var object = this.objects[this.len-1];
                return object;
            }else
                return null;
        },
        length: function(){
            return this.len;
        }
    };
    
    //Queue
    var Queue = function(){
        this.len = 0;
        this.objects = new Array(500);
    };
    Queue.prototype = {
        addFront: function(object){
            if(!object)return;
            for(var i=this.len-1;i>=0;i--){
                this.objects[i+1] = this.objects[i];
            }
            this.objects[0] = object;
            this.len++;
        },
        add:function(object){
            this.objects[this.len] = object;
            this.len++;
        },
        get:function(){
            if(this.len > 0){
                var object = this.objects[0];
                for(var i=0;i<this.len-1;i++){
                    this.objects[i] = this.objects[i+1];
                }
                delete this.objects[this.len-1];
                this.len--;
                return object;
            }else
                return null;
        },
        peek:function(){
            if(this.len > 0){
                return this.objects[0];;
            }else
                return null;
        },
        length:function(){
                return this.len;
        }
    };
    
    //Linked List
    var LinkeList = function(object){
        this.next = null;
        this.value = object;
    };
    LinkeList.prototype = {
        addToTail: function(object){
            var lList = new LinkeList(object);
            var lastNode = this;
            while(lastNode.next != null){
                lastNode = lastNode.next;
            }
            lastNode.next = lList;
        },
        deleteObject:function(object){
            if(this.value == object){
                var nextObject = this.next;
                this.next = nextObject ? nextObject.next : null;
                this.value = nextObject ? nextObject.value : null;
                return;
            }
            var currentNode = this.next;
            var previousNode = this;
            while(currentNode != null){
                if(currentNode.value == object){
                    previousNode.next = currentNode.next;
                    break;
                }else{
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
            }
        },
        printNode:function(){
            var currentNode = this;
            while(currentNode != null){
                console.log(currentNode.value);
                currentNode = currentNode.next;
            }
        }
    };
    
    //Binary Tree
    var BinaryTree = function(object){
        this.left = null;
        this.right = null;
        this.value = object;
        this.visited = false;
    };
    BinaryTree.prototype = {
        addLeft:function(object){
            var bNode = new BinaryTree(object);
            this.left = bNode;
        },
        addRight:function(object){
            var bNode = new BinaryTree(object);
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
    window.onload = function(){
        console.log("***********Stack********");
        var stack = new Stack();
        stack.push("A");
        stack.push("B");
        stack.push("C");
        console.log(stack.pop());
        stack.push("D");
        
        while(stack.peek() != null){
            console.log(stack.pop());
        }
        
        console.log("***********Queue********");
        var queue = new Queue();
        queue.add("A");
        queue.add("B");
        queue.add("C");
        console.log(queue.get());
        queue.add("D");
        queue.addFront("A");
        
        while(queue.peek() != null){
            console.log(queue.get());
        }
        
        console.log("***********LinkedList********");
        var linkedList = new LinkeList("A");
        linkedList.addToTail("B");
        linkedList.addToTail("C");
        linkedList.addToTail("D");
        linkedList.printNode();
        linkedList.deleteObject("A");
        linkedList.printNode();
        
        console.log("***********BinaryTree********");
        var binaryTree = new BinaryTree("A");
        binaryTree.addLeft("B");
        binaryTree.addRight("C");
        binaryTree.left.addLeft("D");
        binaryTree.left.addRight("E");
        binaryTree.right.addLeft("F");
        binaryTree.right.addRight("G");
        console.log("***********BinaryTree - Inorder********");
        binaryTree.inorder();
        console.log("***********BinaryTree - preorder********");
        binaryTree.preorder();
        console.log("***********BinaryTree - postorder********");
        binaryTree.postorder();
        //console.log("***********BinaryTree - BreadthFirst********");
        //binaryTree.breadthFirstTraversal();
        console.log("***********BinaryTree - DepthFirst********");
        binaryTree.depthFirstTraversal();
    };
})(this);