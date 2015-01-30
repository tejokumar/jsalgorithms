var MergeSort = function(array){
    this.array = array;
};
MergeSort.prototype = {
    mergeSort:function(){
        if(!this.array)return null;
        var workSpace = new Array(this.array.length);
        this._recSort(workSpace,0,this.array.length-1);
        return this.array;
    },
    _recSort:function(workspace,lower,higher){
        if(lower == higher){
            return;
        }else{
            var mid = Math.floor((lower + higher)/2);
            this._recSort(workspace,lower,mid);
            this._recSort(workspace,mid+1,higher);
            this._merge(workspace,lower,mid+1,higher);
        }
    },
    _merge:function(workspace,lowerPtr,higherPtr,upperBound){
        var i = 0;
        var lower = lowerPtr;
        var mid = higherPtr - 1;
        var numberOfElements = upperBound - lower + 1;
        while(lowerPtr <= mid && higherPtr <= upperBound){
            if(this.array[lowerPtr] < this.array[higherPtr])
                workspace[i++] = this.array[lowerPtr++];
            else
                workspace[i++] = this.array[higherPtr++];
        }
        while(lowerPtr <= mid)
            workspace[i++] = this.array[lowerPtr++];
        while(higherPtr <= upperBound)
            workspace[i++] = this.array[higherPtr++];
        for(i=0;i<numberOfElements;i++){
            this.array[lower++] = workspace[i];
        }
    }
};
