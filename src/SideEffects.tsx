import React, {useEffect, useState} from 'react';


type DataType ={
    birth_year: string
    created: string
    edited:  string
    eye_color: string
    films: Array<string>
    gender: string
    hair_color: string
    height: string
    homeworld: Array<string>
    mass: string
    name: string
    skin_color: string
    species: string
    starships: string
    url: string
    vehicles: Array<string>
}

const SideEffects = () => {

    const [starWarsData, setStarWarsData] = useState<DataType>()
    const [count, setCount] = React.useState(0)

    useEffect(() => {

        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])


    return (
        <div>
            <h2>Star Wars character ID: {count}</h2>
            <h3>The name is {starWarsData?.name}</h3>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 5)}</pre>
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