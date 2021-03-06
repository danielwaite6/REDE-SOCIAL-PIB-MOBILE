import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px 100px;
`;

export const Title = styled.Text`
    font-size: 14px;
    color: #f4ede8;
    font-family: 'sans-serif';
    margin: 5px 0 10px;

    background: #312e38;
`;

export const BackToSignIn = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #312e38;
    border-top-width: 1px;
    border-color: #232129;
    padding: 16px 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const BackToSignInText = styled.Text`
    font-size: 14px;
    color: #fff;
    font-family: 'sans-serif';
    margin-left: 14px;
`;