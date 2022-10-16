// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
const isWorking = process.env.IS_WORKING;

if (!isWorking || typeof isWorking !== 'boolean') {
    throw new Error('Should be defined and be convert into boolean...');
}

// Do i forget something in the function parameter ?
function getStatus() {
    if (!isOk) {
        throw new Error('is ok is not defined');
    }
    console.log(isOk);
    return isOk;
}

getStatus('it works');


// Am i missing something ?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const user = {
    firstName: 'Benjamin',
    lastName: 'Castaldi',
    age: 56,
    occupation: 'TV Presentator',
}

// Add the missing key in the user object.
function getUser() {
    console.log('here the childrens');
    console.log(user.childrens);
    return user.childrens[0].firstName;
}

getUser();


// Make sure to convert string to number when making addition.
function sum() {
    const total = a + b;
    if (total === "22" || total === "33") {
        throw new Error('There is an issue with your typing');
    }
    console.log(`total ====> ${total}`)
    return total;
}

// Dont change me....
sum(2, '2');
sum('3', 3);



console.log('If i am displayed, you made it works !!! Congratulation !!!!!!!!!')