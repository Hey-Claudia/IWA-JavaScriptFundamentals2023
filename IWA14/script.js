const firstname = 'John';
const age = 35;
const hobby = 'Coding';     // Declared all as constants to store the person's information 

//define function with message parameter:
const logTwice = (message) => {
    console.log(message)
    console.log(message)      //logging it twice here
}

function printMessage () {
    logTwice(`Hello, ${firstname} (${age}). I love ${hobby}!`)  //calling the logTwice function here
}


printMessage()    //calling the printMessage funtion here to execute