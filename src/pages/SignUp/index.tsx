import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Input from '../../components2/Input'
import { Button } from '../../components2/Button'
import { Container } from './styles';
import { Text } from 'react-native';
import { useCallback } from 'react';
import { api } from '../api';


interface FormData {
    email: string;
    nome: string;
    password: string;
};
/*
const schema = Yup.object().shape({
    name: Yup.string().required('Nome é Obrigatório'),
    amount: Yup.number().typeError('Informe um valor numérico')
        .positive('O valor digitado não pode ser negativo')
});*/

export function SignUp() {

    //const [nome, setNome] = useState('');
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');

    const { control, handleSubmit, formState: { errors } } = useForm({
        //resolver: yupResolver(schema),
    });

    async function handleRegister(form: FormData) {

        const data = {
            nome: form.nome,
            email: form.email,
            password: form.password,
        };

        await api.post('dentistrys', {
            name: data.nome,
            email: data.email,
        });

    };

    //const doCallback = useCallback(() => {

    //}, [])

    useEffect(() => {



        /*api.get('dentistrys').then((res) => {
            console.log('res: ', res.data);
        });*/
    }, []);

    return (
        <Container>
            <Input nameIcon="mail" nameplaceholder="Digite aqui o seu Nome" control={control} name='nome' />
            <Input nameIcon="mail" nameplaceholder="Digite aqui o seu Email" control={control} name='email' />
            <Input nameIcon="lock" nameplaceholder="Digite aqui a sua Senha" control={control} name='password' />

            <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
            <Text></Text>
            <Text></Text>

        </Container>
    );
}