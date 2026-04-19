//run this on console to test the code
//node example2reducer.js



//STEP 1:
//We want to sum all the numbers in the array.
//We can use a for loop to do that.

const numbers = [1, 2, 3, 4, 5];
numbers.reduce((currentState, currentItem) => {
    return currentState += currentItem
})

//STEP 2:
//We want to do something asynchronously, for example, we want to wait for 3 seconds before we log the numbers.
//We can use setTimeout to do that.
numbers.reduce((currentState, currentItem) => {
    setTimeout(() => {
        console.log("currentState: " + currentState);
    }, 3000);
    return currentState += currentItem
})

//STEP 3:
//We want to do something asynchronously, but we want to wait for the previous asynchronous operation to finish before we start the next one.
//We can use Promises to do that.