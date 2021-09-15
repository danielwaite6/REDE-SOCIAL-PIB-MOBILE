import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
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

interface IPatients {
    id: string;
    name: string;
    email: string;
    cel1: string;
    cel2: string;
};


export function Appointments() {


    const [dentistryss, setDentistryss] = useState<IDentistrys[]>([]);
    const [dentistryssx, setDentistryssx] = useState({} as IDentistrys);

    const [patients, setPatients] = useState<IPatients[]>([]);


    const [idDentistry, setIdDentistry] = useState('');
    const [habilitado, setHabilitado] = useState(false);

    const [idPatient, setIdPatient] = useState('');



    const [varControle, setVarControle] = useState(false);



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
            await api.post('patients/createPatientDentistry', {
                dentistry_id: idDentistry,
                patient_id: idPatient
            });
        } catch (error) {
            //console.log(error);
        }

    };

    function getIdDentistry(value: string) {
        setVarControle(true)
        setIdDentistry(value);
    };

    function getIdPatient(value: string) {
        setVarControle(false)
        setIdPatient(value);
    };


    useEffect(() => {
        api.get('dentistrys')
            .then((res) => {
                setDentistryss(res.data);
            });
    }, []);

    useEffect(() => {
        api.get('patients')
            .then((res) => {
                setPatients(res.data);
            });
    }, []);

    return (
        <Wrapper>
            <ContainerWrapper>


                <Header />
                <Main>{/**  <Main> é um SCROLLVIEW */}
                    <Title> AGENDAMENTO DE PACIENTES. </Title>
                    <Title> Selecione um Dentista para atendimento.</Title>

                    <Button title="Enviar" onPress={handleSubmit(handleRegister)} />

                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </Main>




                {
                    varControle ?
                        (
                            <View>
                                <Text>Selecione um Paciente</Text>
                                <DentistrysList
                                    data={patients}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <DentistrysContainer onPress={() => getIdPatient(item.id)}>
                                            <Feather name="clock" size={26} color="#ff9000" />
                                            <DentistrysName>{item.name}</DentistrysName>
                                        </DentistrysContainer>
                                    )}
                                />
                            </View>
                        )
                        :
                        (
                            <View>
                                <Text>Selecione um Dentista</Text>
                                <DentistrysList
                                    data={dentistryss}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item }) => (
                                        <DentistrysContainer onPress={() => getIdDentistry(item.id)}>
                                            <Feather name="clock" size={26} color="#ff9000" />
                                            <DentistrysName>{item.name}</DentistrysName>
                                        </DentistrysContainer>
                                    )}
                                />
                            </View>
                        )
                }




            </ContainerWrapper>
        </Wrapper>
    );
}