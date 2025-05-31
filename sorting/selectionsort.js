
const selectionarr = [65,25,12,22,11];


function selectionSort(arr){
    for(let i=0; i<arr.length; i++)
    {
        let temp = arr[i];
        let k = i;
        for(let j=i+1; j<arr.length; j++)
        {
            if(arr[k] > arr[j])
            {
                k=j;
            }
        }
        arr[i] = arr[k];
        arr[k] = temp;
    }

    console.log("sorted array",arr);
}

selectionSort(selectionarr)