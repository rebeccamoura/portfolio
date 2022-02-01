import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { Bio } from "./styles";
import { useState } from 'react';
import InputBio from '../InputBio';


const AdjustBio: React.FC = () => {

    const [textBio, setTextBio] = useState('0')

    const bios = ['Seja bem-vindo ao meu mundo- ou um pequeno resumo dele. Estou dando meu melhor e colocando meu coração em cada aprendizado e projeto.',
    'Seja bem-vindo ao meu mundo- ou um pequeno resumo dele. Minha história com a programação começou em um jogo e, desde então, sou apaixonada por desenvolvimento. Estudo todos os dias de maneira autodidata, sempre colocando meu coração em cada aprendizado e projeto.',
    'Seja bem-vindo ao meu mundo- ou um pequeno resumo dele. Minha história com a programação começou em um jogo, que um amigo me disse que se semelhava bastante com lógica de programação. Eu, curiosa como sou, fui pesquisar sobre e, desde então, sou apaixonada por desenvolvimento. Dedico a maior parte dos meus dias para estudar, seja através de vídeoaulas ou lendo as documentações, sempre colocando meu coração em cada aprendizado e projeto. Mas minha trajetória não acaba aqui, ainda planejo aprender e me aprofundar em diversas áreas e, futuramente, compartilhar meu conhecimento com o máximo de pessoas possível.']

    function changeChecked(event: any) {
        
        setTextBio(event.target.id)

    }


    return (

        <Bio>
            <h3>Ajuste o tamanho da biografia</h3>
            
            <label htmlFor="bioLength">
            
                <span>

                    <InputBio name='bioLength' id='0' textBio={textBio} changeChecked={changeChecked} />
                    <InputBio name='bioLength' id='1' textBio={textBio} changeChecked={changeChecked} />
                    <InputBio name='bioLength' id='2' textBio={textBio} changeChecked={changeChecked} />

                </span>
                <span>
                    Menor
                    <span>Maior</span>
                </span>
            </label>

            <p>{bios[Number(textBio)]}</p>

        </Bio>

    )
};

export default AdjustBio;
