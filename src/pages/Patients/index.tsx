import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import { api } from '../api';
import { Feather } from '@expo/vector-icons'
import Header from '../../components2/Header';
import Input from '../../components2/Input';
import { Button } from '../../components2/Button';

import {
    ContainerWrapper,
    Main,
    Title,
    Wrapper,
    DentistrysList,
    DentistrysInfo,
    DentistrysName,
    DentistrysMeta,
    DentistrysMetaText,
    DentistrysContainer,
    Avatar
} from './styles';



interface FormData {
    email: string;
    nome: string;
    //password: string;
    cel1: string;
    cel2: string;
};

interface IDentistrys {
    id: string;
    name: string;
    email: string;
};


export function Patients() {


    const [dentistryss, setDentistryss] = useState<IDentistrys[]>([]);
    const [dentistryssx, setDentistryssx] = useState({} as IDentistrys);


    const [idDentistry, setIdDentistry] = useState('');
    const [habilitado, setHabilitado] = useState(false);



    const { control, handleSubmit, formState: { errors } } = useForm({
        //resolver: yupResolver(schema),
    });

    async function handleRegister(form: FormData) {

        const data = {
            nome: form.nome,
            email: form.email,
            //password: form.password,
            cel1: form.cel1,
            cel2: form.cel2
        };


        try {
            await api.post('patients', {
                name: data.nome,
                email: data.email,
                //password: data.password,
                cel1: data.cel1,
                cel2: data.cel2,
                dentistry: idDentistry,
            });
        } catch (error) {
            //console.log(error);
        }

    };

    function getId(value: string) {
        setIdDentistry(value);
    };

    /*
        useEffect(() => {
            api.get('dentistrys')
                .then((res) => {
                    setDentistryss(res.data);
                });
        }, []);*/

    return (
        <Wrapper>
            <ContainerWrapper>


                <Header />
                <Main>{/**  <Main> é um SCROLLVIEW */}
                    <Title> CADASTRO DE PACIENTES. </Title>
                    {/** <Title> Selecione um Dentista para atendimento.</Title> */}


                    <Input nameIcon="mail" nameplaceholder="Digite aqui o seu Nome" control={control} name='nome' />
                    <Input nameIcon="mail" nameplaceholder="Digite aqui o seu Email" control={control} name='email' />
                    <Input nameIcon="lock" nameplaceholder="Digite aqui seu nº de celular" control={control} name='cel1' />
                    <Input nameIcon="lock" nameplaceholder="Digite aqui outro nº de celular" control={control} name='cel2' />

                    <Button title="Enviar" onPress={handleSubmit(handleRegister)} />

                </Main>

            </ContainerWrapper>
        </Wrapper>
    );
}