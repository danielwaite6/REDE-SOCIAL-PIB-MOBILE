import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../../components2/Input'
import { Button } from '../../components2/Button'
import { Container } from './styles';


interface FormData {
    email: string;
    password: string;
};
/*
const schema = Yup.object().shape({
    name: Yup.string().required('Nome é Obrigatório'),
    amount: Yup.number().typeError('Informe um valor numérico')
        .positive('O valor digitado não pode ser negativo')
});*/

export function Home() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { control, handleSubmit, formState: { errors } } = useForm({
        //resolver: yupResolver(schema),
    });

    function handleRegister(form: FormData) {
        //const { email, password } = data;
        const data = {
            email: form.email,
            password: form.password,
        }
        console.log('email, password:', data);
    }

    return (
        <Container>
            <Input nameIcon="mail" nameplaceholder="Digite aqui o seu Email" control={control} name='email' />
            <Input nameIcon="lock" nameplaceholder="Digite aqui a sua Senha" control={control} name='password' />

            <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Container>
    );
}