import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../../components2/Input'

import {
    Container,

} from './styles';

export function Home() {

    const navigation = useNavigation();

    return (
        <Container>
            <Input nameIcon="mail" nameplaceholder="Email" />
            <Input nameIcon="lock" nameplaceholder="Senha" />
        </Container>
    );
}