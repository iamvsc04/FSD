function CalculateTotal(a,...arr)
{
    let sum=a;
    for( let i of arr)
    {
        sum+=i;
    }
    console.log("sum of input array is : ",sum);
}

CalculateTotal(10,20,30,40);