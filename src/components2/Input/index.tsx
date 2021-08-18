import React, { memo } from 'react';

import { Control, FieldValues, useController } from 'react-hook-form';

import {
    Container,
    Icon,
    TextInput
} from './styles';

interface IconName {
    nameIcon: string;
    nameplaceholder: string;
    //readonly changeLabel: (arg0: string) => void;

    //readonly perdi_o_foco: (arg0: string) => void;
    name: string;
    control: Control<FieldValues>;
}


function Input({ nameIcon, nameplaceholder, control, name }: IconName) {

    const { field } = useController({
        control,
        defaultValue: '',
        name,
    });

    return (
        <Container>
            <Icon name={nameIcon} size={20} />
            <TextInput
                placeholderTextColor='rgba(192, 192, 192, 0.5)'
                placeholder={nameplaceholder}
                value={field.value}
                onChangeText={field.onChange}
                autoFocus
            />
        </Container>
    );
}
export default memo(Input)