
function filter (){
     const personArray = [
        { id:1, name: "JohnApple", age: 30 },
        { id:2, name: "citrus melon", age: 25 },
        { id:3, name: "newbee", age: 40 }
      ];

    return(
        <div>
            <h1> filter example </h1>
            {personArray.filter(person => person.name.includes('JohnApple')).map(filteredPerson => (
                <div key={filteredPerson.id}>
                    <p>Name: {filteredPerson.name}</p>
                </div>
            ))}
        </div>

    )
}
 export default filter;