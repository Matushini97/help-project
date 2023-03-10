import React, {useState} from 'react';


const Call = () => {
    const [data, setData] = useState({})


    // 1. GET the data (fetch)
    // 2. Save the data to state
    // 3. Log "Component rendered" and look how component is rerendering






    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}
export default Call;




// ----------------------------------- V solution------------------------//

























//
// fetch("https://swapi.dev/api/people/1")
//     .then(res => res.json())
//     .then(data => console.log(data))

// console.log("Component rendered")