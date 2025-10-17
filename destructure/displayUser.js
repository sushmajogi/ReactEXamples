
 // destructuring the code was the best option.
function displayUser(user){
 console.log( user.name);
 console.log(user.age);
 console.log(user.location);
}

// we have to destructure  the code

function displayUser({name, age, location}){
    console.log(name);
    console.log(location);
    console.log(age);

}
//  easier to read avoid repetitive user.prefix