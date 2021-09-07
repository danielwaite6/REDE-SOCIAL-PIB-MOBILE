import React from 'react';
import Header from '../../components2/Header';

import {
    ContainerWrapper, Main, Title, Wrapper,
} from './styles';



export function Appointments() {
    return (
        <Wrapper>
            <ContainerWrapper>


                <Header />
                <Main>{/**  <Main> é um SCROLLVIEW */}

                    <Title> AGENDAMENTOS DE PACIENTES. </Title>





                </Main>






            </ContainerWrapper>
        </Wrapper>
    );
}