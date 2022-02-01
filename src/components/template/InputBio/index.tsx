import { useState } from 'react'

interface Props {
    name: string,
    id: string,
    textBio: string,
    changeChecked: any
}


const InputBio: React.FC<Props> = ({ name, id, textBio, changeChecked }) => {

    return(

        <input type="radio" name={name} id={id}
            checked={textBio === id} onChange={changeChecked} />

    )

}

export default InputBio;
