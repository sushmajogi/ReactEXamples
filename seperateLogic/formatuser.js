function showUserInfo(user){
    const userInfo = `${user.firstname} ${user.lastName}, Age:${user.age}`;
    document.getElementById('info').innerText = userInfo;
}

 // seperate UI with business Logic

 function showUser(user){
    return `${user.firstname} ${user.lastName}, Age:${user.age}`;
 }


 function displayUser(userInfo){
     document.getElementById('Info').innerText= userInfo;
 }

  displayUser(showUser(user))

  // seperates data Formatting from   UI rendering.
// this is show cased allwaya