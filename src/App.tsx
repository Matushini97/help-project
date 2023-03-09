import React, {useState, MouseEvent} from 'react';
import './App.css'



const App = () => {
    //
    const elements1 = ['Element 1', 'Element 2']

    const [elements2, setElements] = useState()




    return (
        <div>
            <button  className='button '>Add Item</button>
            <button  className='button '>Remove Last Item</button>
            <span></span>

        </div>
    );
};

//-----------------------------V solution V-----------------------------------------//













// const App = () => {
//     //
//     const elements1 = ['Element 1', 'Element 2']
//
//     const [elements2, setElements] = useState<Array<string>>(elements1)
//
//
//     const addEl = (e: MouseEvent<HTMLButtonElement>) => {
//         setElements(prevElements => [...prevElements, `Element ${elements2.length + 1}`])
//         // console.log(e)
//     }
//
//     const removeLast = () => {
//         setElements(prevElements => prevElements.slice(0, prevElements.length - 1))
//     }
//
//     const removeEl = (event: string | null) => {
//         setElements(prevElements => prevElements.filter(el => el !== event))
//         // console.log(event)
//     }
//     // const buttonStyle =
//
//     return (
//         <div>
//             <button onClick={addEl} className='button '>Add Item</button>
//             <button onClick={removeLast} className='button '>Remove Last Item</button>
//             <span>{elements2.map(el => <p onClick={(e) => removeEl(e.currentTarget.textContent)} key={el}>{el}</p>)}</span>
//
//         </div>
//     );
// };

export default App;