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