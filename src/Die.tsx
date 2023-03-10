import React, {useState} from 'react';
import './App.css'

type DiePropsType = {
    value: number
    isHeld: boolean
    // holdDice: (id: string) => void
    holdDice: () => void
    id: string
}



const Die = (props: DiePropsType) => {

    const dieClickHandler = () => {
        props.holdDice()
    }
    // const dieClickHandler = (id: string) => {
    //     props.holdDice(id)
    // }

    const heldStyle = props.isHeld ? 'die held': 'die'

    return (
            <div className={heldStyle} onClick={dieClickHandler}>{props.value}</div>
            // <div className={heldStyle} onClick={() => dieClickHandler(props.id)}>{props.value}</div>
    )
};

export default Die;