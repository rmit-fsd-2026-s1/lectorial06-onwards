
//Run this on console / browser:
//on terminal, nodejs

//STEP 1:
//Create a timer.
//Once run, we want to run console.log something.
//We want to do it asynchronously, so we use setTimeout.
//setTimeout takes two arguments, a function and a time in milliseconds. It will run the function after the time has passed.

    function run(){
        setTimeout(function(){
            console.log('Hello')
        }, 3000)
    }

    run()

//STEP 2:
//We want to do asynchronously
//Let's say we have Promise
//A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A promise can be in one of three states: pending, fulfilled, or rejected.
//A promise is fulfilled when the asynchronous operation is completed successfully and the resulting value is available.
//A promise is rejected when the asynchronous operation fails and the reason for the failure is available.

    function run(){
        console.log('1');
        new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
             console.log('here');
        })

       
    }

    run()

//STEP 3:
//We want to do asynchronously, but we want to wait until the promise is resolved before we run the next line of code.
//We can use .then() to do that.
//The .then() method takes two arguments, a callback function for the fulfilled case of the promise, 
// and a callback function for the rejected case of the promise. 
// The .then() method returns a new promise, which is resolved with the return value of the callback function.



    function run(){
        new Promise((resolve, reject) => {
            setTimeout(resolve, 3000)
        }).then(() => {
            console.log('2')
             new Promise((resolve, reject) => {
                setTimeout(resolve, 3000)
            }).then(() => {
                console.log('3')
            })  
        })  

        console.log('1')
    }

    run()

//disadvantage of this is that it can lead to callback hell, where we have nested callbacks that can be difficult to read and maintain.
//To avoid callback hell, we can use async/await, which is a syntactic sugar for promises. 
// It allows us to write asynchronous code that looks synchronous.

//STEP 4:

    async function run(){
        console.log('1')
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 3000)
        })
        console.log('2')
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 3000)
        })
        console.log('3')

    }
    run()

//Example of using async/await with fetch API, which is a modern way to make HTTP requests in JavaScript. 
// It returns a promise that resolves to the response of the request.
    fetch("https://ipinfo.info")