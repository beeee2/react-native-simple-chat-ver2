import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import styled, { ThemeContext } from 'styled-components/native';
import { Text, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Container = styled.View`
    flex : 1;
    background-color : ${({theme}) => theme.background };
`;
const ItemContainer = styled.TouchableOpacity`
    flex-direction : row;
    align-items : center;
    border-bottom-width: 1px;
    border-color : ${({ theme }) => theme.listBorder};
    padding: 15px 20px;
`;
const ItemTextContainer = styled.View`
    flex: 1;
    flex-direction: column;
`;
const ItemTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
`;
const ItemDescription = styled.Text`
    font-size: 16px;
    margin-top: 5px;
    color : ${({theme}) => theme.listTime};
`;
const ItemTime = styled.Text`
    font-size: 12px;
    color: ${({theme}) => theme.listTime};
`;

const ChannelList = ({navigation}) => {
    return (
        <Container>
            <Text style={{fontSize:24}}>Channel List</Text>
            <Button 
                title="Channel Creation"
                onPress={() => navigation.navigate('Channel Creation')}
            />
        </Container>
    );
};

export default ChannelList; 