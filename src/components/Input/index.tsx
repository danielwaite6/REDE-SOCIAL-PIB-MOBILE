import React from 'react';

import {
    Container,
    Icon,
    TextInput
} from './styles';

interface IconName {
    nameIcon: string;
    nameplaceholder: string;
    readonly changeLabel: (arg0: string) => void;
}


export function Input({ nameIcon, nameplaceholder, changeLabel }: IconName) {



    return (
        <Container>
            <Icon name={nameIcon} size={20} />
            <TextInput
                placeholderTextColor='rgba(192, 192, 192, 0.5)'
                placeholder={nameplaceholder}
                onChangeText={(text) => changeLabel(text)}

            />
        </Container>
    );
}