var PriorityQueue = function(comparator){
    this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
    this.first = null;
    this.last = null;
};

PriorityQueue.DEFAULT_COMPARATOR =  function(item1,item2){
    if(item1 == item2)return 0;
    if(item1 > item2)return 1;
    if(item1 < item2)return -1;
};
PriorityQueue.prototype = {
    enqueue:function(object){
        var newNode = new LinkeList(object);
        if(this.first == null){ // If the queue is empty
            this.first = newNode;
            this.last = newNode;
        }else{
            if(this._comparator(newNode.value,this.first.value) < 0){ // If the new node is less than first node
                newNode.next = this.first;
                this.first = newNode;
            }else{
                 var temp = this.first;
                 var previous = this.first;
                while(this._comparator(newNode.value,temp.value) >= 0){ // Find the first node which is greater than new node
                    if(temp.next == null) // reached last node
                        break;
                    previous = temp;
                    temp = temp.next;
                }
                if(temp.next == null && this._comparator(newNode.value,temp.value) >= 0){ // If new node is greater than all nodes
                    this.last.next = newNode;
                    this.last = newNode;
                }else { // New node is in the middle
                    previous.next = newNode;
                    newNode.next = temp;
                }
            }
        }
    },
    dequeue:function(){
        if(this.first == null)return null;
        var value = this.first.value;
        this.first = this.first.next;
        return value;
    },
    isEmpty:function(){
        return this.first == null;
    }
};