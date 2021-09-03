import React, { useState, useEffect } from 'react';
import { api } from '../api';

import { Feather } from '@expo/vector-icons'

import {
    Container,
    Header,
    HeaderTitle,
    UserName,
    ProfileButton,
    ProvidersListTitle,
    UserAvatar,
    ProvidersList,
    ProviderContainer,
    ProviderAvatar,
    ProviderInfo,
    ProviderName,
    ProviderMeta,
    ProviderMetaText,
} from './styles';

export function Dashboard() {

    const [listDentistrys, setListDentistrys] = useState([]);
    /**await api.post('dentistrys', {
            name: data.nome,
            email: data.email,
        }); */
    useEffect(() => {
        api.get('dentistrys')
            .then((res) => {
                setListDentistrys(res.data);
            });
    }, []);

    return (
        <Container>
            <Header>
                <HeaderTitle>
                    Bem Vindo, {"\n"}
                    <UserName></UserName>
                </HeaderTitle>
                <ProfileButton onPress={() => { }}>
                    <UserAvatar source={{ uri: '' }} />
                </ProfileButton>
            </Header>

            <ProvidersList
                data={listDentistrys}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <ProvidersListTitle>Dentistas</ProvidersListTitle>
                }
                renderItem={({ item: provider }) => (
                    <ProviderContainer onPress={() => { }}>
                        {/**<ProviderAvatar source={{ uri: provider.avatar_url }} /> */}
                        <ProviderInfo>

                            <ProviderName>{provider.name}</ProviderName>
                            <ProviderName>{provider.email}</ProviderName>

                            <ProviderMeta>
                                <Feather name="calendar" size={14} color="#ff9000" />
                                <ProviderMetaText>Segunda à Sexta</ProviderMetaText>
                            </ProviderMeta>

                            <ProviderMeta>
                                <Feather name="clock" size={14} color="#ff9000" />
                                <ProviderMetaText>8h às 18h</ProviderMetaText>
                            </ProviderMeta>

                        </ProviderInfo>
                    </ProviderContainer>
                )}
            />



        </Container>
    );
}