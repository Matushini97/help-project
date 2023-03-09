import React, {ChangeEvent, useState} from 'react';
import s from './Main.module.css'
import memesData from "../../memesData";

type MemeStateType = {
    topText: string
    bottomText: string
    randomImage: string
}

type MemesType = {
    "id": string
    "name": string
    "url": string
    "width": number
    "height": number
    "box_count": number

}

const Main = () => {
    const [meme, setMeme] = useState<MemeStateType>({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState<MemesType[]>(memesData.data.memes)

    const getMemeImage = () => {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
                randomImage: url
        }))
    }

    const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className={s.main}>
            <div className={s.form}>
                <input
                    type="text"
                    placeholder="Top text"
                    className={s.formInput}
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className={s.formInput}
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className={s.formButton}
                    onClick={getMemeImage}
                >
                    Get a new meme image 🥷
                </button>
            </div>
            <div className={s.meme}>
                <img src={meme.randomImage} className={s.memeImage} />
                <h2 className={`${s.memeText} ${s.top}`}>{meme.topText}</h2>
                <h2 className={`${s.memeText} ${s.bottom}`}>{meme.bottomText}</h2>
            </div>
        </main>
    );
};

export default Main;