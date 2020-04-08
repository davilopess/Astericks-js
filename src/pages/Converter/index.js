import React, { useState } from 'react';
import './styles.css';

import { MdAutorenew } from "react-icons/md";
import logoImg from '../../assets/Logo.png';

export default function Converter() {
    const [text, setText] = useState('');
    const [textConverted, setConverted] = useState('');

    function handleConverter(e) {
        e.preventDefault();
        setConverted(text.replace(/\w/g, '*'));

    }

    return (
        <div className="converter-container">
            <div className="container">
                <section>
                    <img src={logoImg} alt="Astericks" />
                    {/* <h1>
                        Texto base do projeto
                    </h1> */}

                </section>
                <form onSubmit={handleConverter}>
                    <textarea
                        placeholder="Digite um texto para ser convertido"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    /><br />

                    <button className="button" type="submit">
                        <MdAutorenew size={22} color="fff" />
                    </button>
                    <span>
                        {textConverted}

                    </span>
                </form>

            </div>

        </div>
    );
};