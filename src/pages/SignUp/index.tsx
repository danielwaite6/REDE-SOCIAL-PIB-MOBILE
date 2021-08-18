import React, { useState } from 'react';
import { Input } from '../../components/Input';

import {
    Container,
    Title
} from './styles';


export function SignUp() {

    //const [mail, setMail] = useState('');
    //const [password, setPassword] = useState('');

    const handleLabel = (novoLabel: string) => {
        //setWord(novoLabel);
        console.log('novoLabel:', novoLabel);

    }

    return (
        <>
            <Container>
                <Title>SignUp</Title>

                <Input
                    changeLabel={handleLabel}
                    nameIcon='mail'
                    nameplaceholder="Email"
                />
                <Input
                    changeLabel={handleLabel}
                    nameIcon='lock'
                    nameplaceholder="Senha"
                />



            </Container>


        </>
    );
}