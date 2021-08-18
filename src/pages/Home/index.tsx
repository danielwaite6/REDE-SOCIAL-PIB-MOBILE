import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../../components2/Input'
import { Button } from '../../components2/Button'
import { Container } from './styles';


interface FormData {
    name: string;
    amount: string;
};
/*
const schema = Yup.object().shape({
    name: Yup.string().required('Nome é Obrigatório'),
    amount: Yup.number().typeError('Informe um valor numérico')
        .positive('O valor digitado não pode ser negativo')
});*/

export function Home() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        //resolver: yupResolver(schema),
    });

    function handleRegister(data: Object) {

        console.log('Form:', data);
    }

    return (
        <Container>
            <Input nameIcon="mail" nameplaceholder="Digite aqui o seu Email" control={control} name='firstName' />
            <Input nameIcon="lock" nameplaceholder="Digite aqui a sua Senha" control={control} name='lastName' />

            <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Container>
    );
}