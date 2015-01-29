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
// Not sure of this???
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
        }else if(this.parent == null){
            var dummyTree = new BinarySearchTree("0");
            dummyTree.addLeft(this);
            var result = dummyTree.delete(object);
            this.value = dummyTree.left.value;
            this.left = dummyTree.left.left;
            this.right = dummyTree.left.right;
            return result;
        }else if(this.parent.left == this){
            this.parent.left = this.left ? this.left : this.right;
        }else if(this.parent.right == this){
            this.parent.right = this.left ? this.left : this.right;
        }
        return true;
    }
};