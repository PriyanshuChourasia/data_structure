
const arr = [10,20,4,40,50,3,2];


function largestSumOfArray(arr){

    for(let i=0; i<arr.length; i++)
    {
        for(let j=0; j<arr.length; j++)
        {
            if(arr[i] > arr[j])
            {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    console.log("Largest element of array: ",arr[0]);

}


largestSumOfArray(arr);