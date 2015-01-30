(function(){
    //Selection sort -- Move lowest number to correct position and continue same steps.
    // Complexity O(n2)
    var selectionSort = function(array,size){
        var min;
        for(var i=0;i<size;i++){
            min = i;
            for(var j = i+1;j<size;j++){
                if(array[j] < array[min])min = j;
            }
            swap(array,i,min);
        }
    };
    
    // Insertion Sort - Keep sorting as we go up the array.
    // Complexity O(n2)
    var insertionSort = function(array,size){
        for(var i=1;i<size;i++){
            var j = i;
            while(j>0 && array[j] < array[j-1] ){
                swap(array,j,j-1);
                j = j-1;
            }
        }
    };
    var swap = function(array,i,j){
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
    
    window.onload = function(){
        var a =3;
        var b = 5;
        console.log("a="+a+" b="+b);
        console.log("a ^ b "+(a^b^a));
        
        console.log("a="+a+" b="+b);
        
        var arr = [3,2,1,5,7,4,9];
        var arrForSelection = arr.slice(0);
        var arrForInsertion = arr.slice(0);
        var arrForMerge = arr.slice(0);
        var arrForQuick = arr.slice(0);
        
        console.log(arr);
        selectionSort(arrForSelection,6);
        console.log("Selection Sort");
        console.log(arrForSelection);
        insertionSort(arrForInsertion,6);
        console.log("Insertions Sort");
        console.log(arrForInsertion);
        
        var mergeSort = new MergeSort(arrForMerge);
        console.log("Merge Sort");
        console.log(mergeSort.mergeSort());
        
        var quickSort = new QuickSort(arrForQuick);
        console.log("Quick Sort");
        console.log(quickSort.sort());
    }
})(this);