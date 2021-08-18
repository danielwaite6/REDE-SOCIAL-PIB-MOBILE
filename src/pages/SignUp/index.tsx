import React, { useEffect, useState } from 'react';
import { Input } from '../../components/Input';

import {
    Container,
    Title
} from './styles';


export function SignUp() {

    const [perdeu_o_foco, setPerdeu_o_foco] = useState('');
    //const [ganhou_o_foco, setGanhou_o_foco] = useState('');

    const handleLabel = (novoLabel: string) => {
        console.log('novoLabel:', novoLabel);
    };

    const onBlur = (novoLabel: string) => {
        setPerdeu_o_foco(novoLabel);
    };

    /*const onFocus = (novoLabel: string) => {
        setGanhou_o_foco(novoLabel);
    };*/

    useEffect(() => {
        console.log('perdeu_o_foco:', perdeu_o_foco);
        //console.log('perdeu_o_foco:', ganhou_o_foco);
    }, [perdeu_o_foco, /**ganhou_o_foco */]);

    return (
        <>
            <Container>
                <Title>SignUp</Title>

                <Input
                    changeLabel={handleLabel}
                    nameIcon='mail'
                    nameplaceholder="Email"
                    perdi_o_foco={onBlur}
                //ganhou_o_foco={onFocus}
                />
                <Input
                    changeLabel={handleLabel}
                    nameIcon='lock'
                    nameplaceholder="Senha"
                    perdi_o_foco={onBlur}
                //ganhou_o_foco={onFocus}
                />



            </Container>


        </>
    );
}