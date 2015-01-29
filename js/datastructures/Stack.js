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
    