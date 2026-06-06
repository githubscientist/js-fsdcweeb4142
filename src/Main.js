// pattern matching using regex -> regular expressions

// string with multiple emails embedded
let str = "Hello, you can reach out to me at sathish@guvi.in, or at sathish@geeknetworks.in";

// check if the string contains "test"
// console.log(/test/.test(str)); // true

// get the first match of "ain"
// console.log(/ain/.exec(str)); 

// using match
// console.log(str.match(/ain/g));

// get all the emails
console.log(str.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g));