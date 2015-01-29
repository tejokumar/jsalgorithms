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
    //Stack With LinkedList
    var StackWithLinkedList = function(){
        this.first = null;
    };
    StackWithLinkedList.prototype = {
        push:function(object){
            var lList = new LinkeList(object);
            lList.next = this.first;
            this.first = lList;
        },
        pop:function(){
            if(!this.first)return null;
            var object = this.first.value;
            this.first = this.first.next;
            return object;
        },
        peek:function(){
            if(!this.first)return null;
            else return this.first.value;
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
    //Queue with linkedlist
    var QueueWithLinkedList = function(){
        this.first =null;
        this.last = null;
    };
    QueueWithLinkedList.prototype = {
        add:function(object){
            var lList = new LinkeList(object);
            if(!this.last){
                this.first = lList;
                this.last = lList;
            }else {
                lList.next = this.last;
                this.last = lList;
            }
        },
        get:function(){
            if(!this.first)return null;
            var object = this.first.value;
            this.first = this.first.next;
            return object;
        },
        peek:function(){
            if(!this.first)return null;
            else return this.first.value;
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
    
    //Binary Search Tree
    var BinarySearchTree = function(object){
        BinaryTree.apply(this,arguments);
    };
    BinarySearchTree.prototype = new BinaryTree();
    BinarySearchTree.prototype.addLeft=function(object){
        var bNode = new BinarySearchTree(object);
        bNode.parent = this;
        this.left = bNode;
    };
    BinarySearchTree.prototype.addRight=function(object){
        var bNode = new BinarySearchTree(object);
        bNode.parent = this;
        this.right = bNode;
    };
    BinarySearchTree.prototype.search = function(object){
        if(this.value == object)return this;
        var tree;
        if(object < this.value ){
            tree = this.left;
        }else
            tree = this.right;
        return tree ? tree.search(object) : null;
    };
    BinarySearchTree.prototype.add = function(object){
        var currentNode = this;
        var parentNode = this;
        var isLeftNode = true;
        while(currentNode != null){
            parentNode = currentNode
            if(object < currentNode.value){
                isLeftNode = true;
                currentNode = currentNode.left;
            }else{
                isLeftNode = false;
                currentNode = currentNode.right;
            }
        }
        if(isLeftNode)
            parentNode.addLeft(object);
        else
            parentNode.addRight(object);
    };
    // Needs verification
    BinarySearchTree.prototype.successor = function(){
        if(this.right != null)
            return this.right.minNode();
        else
            return this.parent;
    };
    BinarySearchTree.prototype.minNode = function(){
        if(this.left == null)
            return this;
        else
            return this.left.minNode();
    };
    //Will not work if the value to be deleted is root  
    BinarySearchTree.prototype.delete = function(object){
        if(object < this.value){
            if(this.left != null)
                return this.left.delete(object);
            else
                return false;
        }else if(object > this.value){
            if(this.right != null)
                return this.right.delete(object);
            else
                return false;
        }else {
            if(this.left != null && this.right != null){
                this.value = this.successor().value;
                this.right.delete(this.value);
            }else if(this.parent.left == this){
                this.parent.left = this.left ? this.left : this.right;
            }else if(this.parent.right == this){
                this.parent.right = this.left ? this.left : this.right;
            }
            return true;
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
        
        console.log("***********Binary Search Tree********");
        var binarySearchTree = new BinarySearchTree("5");
        binarySearchTree.add("4");
        binarySearchTree.add("8");
        binarySearchTree.add("3");
        binarySearchTree.add("7");
        
        //console.log("***********BinaryTree - BreadthFirst********");
        //binarySearchTree.breadthFirstTraversal();
        console.log("***********BinaryTree - DepthFirst********");
        binarySearchTree.depthFirstTraversal();
        
        console.log("***********Binary Search Tree2********");
        binarySearchTree = new BinarySearchTree("5");
        binarySearchTree.add("4");
        binarySearchTree.add("8");
        binarySearchTree.add("3");
        binarySearchTree.add("7");
        binarySearchTree.delete("8");
        //console.log("***********BinaryTree - BreadthFirst********");
        //binarySearchTree.breadthFirstTraversal();
        console.log("***********BinaryTree - DepthFirst2********");
        binarySearchTree.depthFirstTraversal();
    };
})(this);