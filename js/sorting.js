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
        
        var arr = [3,2,1,5,7,4];
        console.log(arr);
        //selectionSort(arr,6);
        insertionSort(arr,6);
        console.log(arr);
    }
})(this);