const selectionarr = [65,25,25,12,22,22,11];



function insertionSorting(selectionarr){
    for(let i=0; i<selectionarr.length; i++)
    {
        let key = selectionarr[i];
        let j = i-1;
        while(j>=0 && selectionarr[j] > key){
            selectionarr[j+1] = selectionarr[j];
            j--;
        }
        selectionarr[j+1] = key;
    }


}

insertionSorting(selectionarr);

console.log("Sorted array: ",selectionarr);