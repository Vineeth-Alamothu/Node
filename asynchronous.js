console.log("a");

setTimeout(() => {
    console.log("a2");
}, 2000);

console.log("b");
console.log("c");

let firstName = "Vineeth";
let lastName = "";

const setLastname = new Promise((resolve, reject) => {
    setTimeout(() => {
        lastName = "Alamothu";
        resolve();
    }, 2000);
});

// then
// setLastname.then(() => {
//     console.log(firstName + " " + lastName);
// });

// async await
const getFullName = async () => {
    await setLastname;
    console.log(firstName + " " + lastName);
};

getFullName();