import React, {useEffect, useState} from 'react';


const SideEffects = () => {

    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = React.useState(0)

    useEffect(() => {
        console.log('effect run')
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])
    // console.log('rendered')
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>

        </div>
    );
};

export default SideEffects;
















// fetch("https://swapi.dev/api/people/1")
//     .then(res => res.json())
//     .then(data => console.log(data))


/**
 * Challenge: Combine `count` with the request URL
 * so pressing the "Get Next Character" button will
 * get a new character from the Star Wars API.
 * Remember: don't forget to consider the dependencies
 * array!
 */