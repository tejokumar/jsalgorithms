var QuickSort = function(array){
    this.array = array;
};
QuickSort.prototype = {
    sort:function(){
        if(!this.array)return null;
        this._recSort(0,this.array.length-1);
        return this.array;
    },
    _recSort:function(left,right){
        if(right-left <=0){
            return;
        }else{
            var pivot = this.array[right]; // Select the right most value as pivot
            var partition = this._partitionIt(left,right,pivot); // Get the partition where sorted element is set
            this._recSort(left,partition-1);
            this._recSort(partition+1,right);
        }
    },
    _partitionIt:function(left,right,pivot){
        var leftPtr = left - 1;
        var rightPtr = right;
        while(true){
            while(this.array[++leftPtr] < pivot) // Increment left pointer until left greater than pivot
                ;
            while(rightPtr > 0 && this.array[--rightPtr] > pivot) // Decrement right pointer until right is less than pivot
                ;
            if(leftPtr >= rightPtr) // If they cross, values are sorted
                break;
            else
                this._swap(leftPtr,rightPtr); //swap values
        }
        this._swap(leftPtr,right); // restore pivot
        return leftPtr;
    },
    _swap:function(left,right){
        var temp = this.array[left];
        this.array[left] = this.array[right];
        this.array[right] = temp;
    }
}