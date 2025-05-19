const bubblearr = [1,34,54,23,67,81,12,1,25,54,1,234,1,2,1,67,34,2,1,2];



let temp;


// decending order
for(let i=0; i<bubblearr.length; i++)
{
    for(let j=0; j<bubblearr.length; j++)
    {
        if(bubblearr[i] > bubblearr[j])
        {
            temp = bubblearr[i];
            bubblearr[i] = bubblearr[j];
            bubblearr[j] = temp;
        }
    }
}

// ascending order

for(let i=0; i<bubblearr.length; i++)
{
    for(let j=0; j<bubblearr.length; j++)
    {
        if(bubblearr[i] < bubblearr[j])
        {
            temp = bubblearr[i];
            bubblearr[i] = bubblearr[j];
            bubblearr[j] = temp;
        }
    }
}

console.log(bubblearr,"sorted in asc");