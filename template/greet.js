

function greet(name){
    name = name|| 'Guest';
    return 'Hello' + name +'!';
}

function greet(name = 'Guest')
{
    return `Hello, ${name}!`;

}
 // use default parameters and template literals
  // shorter cleaner and more idiomatic ES6
   // template literals