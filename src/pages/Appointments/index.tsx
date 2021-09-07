import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
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
    DentistrysContainer
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


export function Appointments() {


    const [dentistrys, setDentistrys] = useState<IDentistrys[]>([]);

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

        await api.post('patients', {
            name: data.nome,
            email: data.email,
            //password: data.password,
            cel1: data.cel1,
            cel2: data.cel2,
        });

    };


    useEffect(() => {
        api.get('dentistrys')
            .then((res) => {
                setDentistrys(res.data);
            });
    }, []);

    return (
        <Wrapper>
            <ContainerWrapper>


                <Header />
                <Main>{/**  <Main> é um SCROLLVIEW */}
                    <Title> AGENDAMENTOS DE PACIENTES. </Title>

                    <Input nameIcon="mail" nameplaceholder="Digite aqui o seu Nome" control={control} name='nome' />
                    <Input nameIcon="mail" nameplaceholder="Digite aqui o seu Email" control={control} name='email' />
                    <Input nameIcon="lock" nameplaceholder="Digite aqui seu nº de celular" control={control} name='cel1' />
                    <Input nameIcon="lock" nameplaceholder="Digite aqui outro nº de celular" control={control} name='cel2' />

                    <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
                </Main>



                <DentistrysList
                    data={dentistrys}
                    keyExtractor={(dentistry) => dentistry.id}
                    //ListFooterComponent={
                    //() => { }
                    //}
                    renderItem={({ item }) => (
                        <DentistrysContainer onPress={() => { }}>
                            {/**<PatientAvatar source={{ uri: item.avatar_url }} /> */}

                            {
                                /**<TouchableOpacity onPress={() => { }}>
                                <FastImage
                                    style={{ width: 80, height: 80, borderRadius: 50, }}
                                    source={{
                                        uri: '',
                                        priority: FastImage.priority.high,
                                    }}
                                    resizeMode={FastImage.resizeMode.stretch}
                                />
                            </TouchableOpacity> */
                            }

                            <DentistrysInfo>

                                <DentistrysName>{item.name}</DentistrysName>

                                <DentistrysMeta>
                                    <Feather name="calendar" size={26} color="#ff9000" />
                                    <DentistrysMetaText>12/02/2013</DentistrysMetaText>
                                </DentistrysMeta>

                                <DentistrysMeta>
                                    <Feather name="clock" size={26} color="#ff9000" />
                                    <DentistrysMetaText>19:00</DentistrysMetaText>
                                </DentistrysMeta>

                            </DentistrysInfo>
                        </DentistrysContainer>
                    )}

                />




            </ContainerWrapper>
        </Wrapper>
    );
}