(function(){
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
        
        console.log("***********Binary Search Tree - Delete some node********");
        binarySearchTree = new BinarySearchTree("5");
        binarySearchTree.add("4");
        binarySearchTree.add("8");
        binarySearchTree.add("3");
        binarySearchTree.add("7");
        binarySearchTree.delete("8");
        console.log("***********BinaryTree - DepthFirst - - Delete some node********");
        binarySearchTree.depthFirstTraversal();
        
        console.log("***********Binary Search Tree - Delete root node********");
        binarySearchTree = new BinarySearchTree("5");
        binarySearchTree.add("4");
        binarySearchTree.add("8");
        binarySearchTree.add("3");
        binarySearchTree.add("7");
        binarySearchTree.delete("5");
        console.log("***********BinaryTree - DepthFirst - - Delete root node********");
        binarySearchTree.depthFirstTraversal();
        
        console.log("***********Heap - Min Value********");
        var heap = new Heap();
        heap.push(6);
        heap.push(3);
        heap.push(1);
        heap.push(8);
        heap.push(9);
        heap.push(7);
        
        console.log("Min Value "+heap.topValue());
        
        console.log("***********Heap - Max Value********");
        var heap = new Heap("MAX");
        heap.push(6);
        heap.push(3);
        heap.push(1);
        heap.push(8);
        heap.push(9);
        heap.push(7);
        
        heap.pop();
        console.log("Max Value "+heap.topValue());
        
        console.log("***********Priority Queue - With LinkedList********");
        var pq = new PriorityQueue();
        pq.enqueue("4");
        pq.enqueue("3");
        pq.enqueue("6");
        pq.enqueue("9");
        pq.enqueue("2");
        pq.enqueue("11"); // This goes to the top as string coparison of "11" and "2" is < 0
        
        console.log("Priority Queue Middle Value "+pq.dequeue());
        
        pq.enqueue("1");
        pq.enqueue("8");
        
        while(!pq.isEmpty()){
            console.log("Priority Queue Value "+pq.dequeue());
        }
        
        pq.enqueue(4);
        pq.enqueue(3);
        pq.enqueue(6);
        pq.enqueue(9);
        pq.enqueue(2);
        pq.enqueue(11)
        
        console.log("Priority Queue Middle Number Value "+pq.dequeue());
        
        pq.enqueue(1);
        pq.enqueue(8);
        
        while(!pq.isEmpty()){
            console.log("Priority Queue Number Values "+pq.dequeue());
        }
    };
})(this);