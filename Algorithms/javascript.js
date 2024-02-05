// let array = [2,4,5,8]
// let number = 10

// const pushFront = (arr,nr) => {
//     for (let i=arr.length; i>0; i--) {
//         arr[i]= arr[i-1];
//     }
//     arr[0] = nr;
//     console.log(arr)
//     }


// console.log(pushFront(array,number));


// let array = [2,4,5,8]
// let number = 10

// const pushFront = (arr,nr,index) => {
    // for (let i=arr.length; i>index; i--) {
    //     arr[i]= arr[i-1];
    // }
    // arr[index] = nr;
    // console.log(arr)
    // }


// console.log(pushFront(array,number,1));


// let array = [2,4,5,8]

// const removeLast = (arr) => {
//     arr.length = arr.length-1
//     console.log(arr);
//     }


// removeLast(array);


let array = [2,4,5,8]

const removeLast = (arr,index) => {
    for (let i=index; i<array.length; i++) {
        arr[i]= arr[i+1];
    }
    arr.length = arr.length-1
    console.log(arr)
    }


removeLast(array, 2);