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