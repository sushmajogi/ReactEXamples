import { useEffect } from "react";
import { useState } from "react";

function ApiCall({ name }) {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [flag, setFlag] = useState(false);

function handleClickButton() {
    alert("Button clicked!");
    fetchApicall()
}
useEffect(() => {
    fetchApicall();
}, [data]);

async function fetchApicall() {
    try{
    setLoading(true);
    const responseApi = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await responseApi.json();
    setData(data);
    setFlag(true);
    console.log(data);
     }      
    catch(error){
        console.error('Error fetching data:', error);
        setError(error);
    } 
    finally {
        setLoading(false);
    }


return (
    <div>
        <h1> API Call </h1>
        {flag ? (loading ? <p>Loading...</p> : <p>Data fetched successfully!</p>) : error && <p>Error: {error.message}</p>}
      
        <button onClick={handleClickButton}>Click Me</button>
    </div>
);
}}

export default ApiCall;