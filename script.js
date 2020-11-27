//Stating the array to be sorted
let arr = [9, 7, 5, 6, 1, 2, 3, 8, 4];

//the function for the bubble sort
function bubble_sort(arr){

    //declaring a variable called swap
    var swap;

    //declaring a vaiable that will keep the index length pf the array
    var arrLengthIndex = arr.length - 1;

    //declaring a variable that will represent the array
    var x = arr;

    //a do while function
    do{
        //set swap value to false;
        swap = false;

        //for function that will list out ll the elements in the array
        for (var i = 0; i < arrLengthIndex; i++){

            //if the current number is greater than the nu,ber after it...
            if (x[i] > x[i+1]){

                //declare a variable called temp and give it the value of the position of the current number...
                var temp = x[i];

                //time to replace. replace the current number to become the next number...
                x[i] = x[i+1];

                //and the next number to become the current number...
                x[i+1] = temp;

                //and set the swap value is true...
                swap = true;
            }
        }
    //it'll keep on executing the code above if the swap value is true
    //NOTE: the swap value will be true if the system finds two numbers which aren't sorted properly.
    //NOTE: note, if it finds two numbers that are sorted, it'll skip the process and move on to the next pair
    //it keeps on going until a full run wihtout the swap variable having the true value
    } while (swap);
    
    //returning the sorted array
    return x;

}

document.getElementById('result').innerText = bubble_sort(arr);