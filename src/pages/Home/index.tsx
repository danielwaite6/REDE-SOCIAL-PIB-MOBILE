import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Content,
    Carro
} from './styles';

export function Home() {

    const navigation = useNavigation();

    return (
        <Container>
            <Content>
                <Carro>
                    ALELUIA
                </Carro>
            </Content>
        </Container>
    );
}