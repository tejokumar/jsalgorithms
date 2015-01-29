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