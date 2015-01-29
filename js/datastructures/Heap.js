// Heap can be of type 'MAX' or MIN by default
var Heap = function(type){
    this.type = type;
    this.array = new Array();
};
Heap.prototype = {
    compare:function(a,b){
        var result = 0;
        switch(this.type){
            case "MAX":
                // Behave exactly opposite to Min heap. If comparator reverse, same logic as min heap holds good
                if(a > b)result = -1;
                else if(a < b)result = 1;
                break;
            default:
                if(a < b)result = -1;
                else if(a > b)result = 1;
        }
        return result;
    },
    left:function(n){
        return 2 * n + 1;
    },
    right:function(n){
        return 2 * n + 2;
    },
    parent:function(n){
        return Math.ceil(n/2)-1;
    },
    heapify:function(n){
        var lIndex = this.left(n);
        var rIndex = this.right(n);
        var compIndex;
        if(lIndex < this.array.length
            && this.compare(this.array[lIndex],this.array[n]) < 0){
            compIndex = lIndex;
        }else if(rIndex < this.array.length
            && this.compare(this.array[rIndex],this.array[n]) < 0){
            compIndex = rIndex;
        }else{
            compIndex = n;
        }
        if(n != compIndex){
            var temp = this.array[compIndex];
            this.array[compIndex] = this.array[n];
            this.array[n] = temp;
            this.heapify(compIndex);
        }
    },
    shiftUp:function(n){
        var p = this.parent(n);
        if(p >= 0 && this.compare(this.array[p],this.array[n]) > 0){
            var temp = this.array[p];
            this.array[p] = this.array[n];
            this.array[n] = temp;
            this.shiftUp(p);
        }
    },
    heapifyArray: function(){
        // Check from center
        var i = Math.floor(this.array.length/2) - 1;
        for(;i>=0;i--){
            this.heapify(i);
        }
    },
    push:function(value){
        this.array.push(value);
        // Shift lowest element to top if it is Min or max based on type
        this.shiftUp(this.array.length - 1);
    },
    pop:function(){
        var value;
        if(this.array.length > 0){
            value = this.array[0];
            // Put the bottom element to top and heapify
            this.array[0] = this.array.pop();
            this.heapify(0);
        }else
            value = this.array.pop();
        return value;
    },
    size:function(){
        return this.array.length;
    },
    topValue:function(){
        return this.array[0];
    }

};
