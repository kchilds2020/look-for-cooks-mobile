import styled from 'styled-components'


export const Section = styled.View`
    background-color: white;
    border-radius: 8px;
    width: 95%;
    margin: 10px auto;
`;

export const Header = styled.View`
    display: flex;
    align-items: center;
    background-color: white;
    padding: 10px;
    width: 95%;
    margin: 5px auto;
    border-radius: 8px;
`;

export const NumColorDark = styled.Text`
    color: green;
`;

export const CustomerOrderItem = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    margin: 5px auto;
    border-radius: 8px;
    padding: 10px;
`;

export const SectionLeft = styled.View`
    display: flex;
    justify-content: center;
`;

export const SectionRight = styled.View`
    display: flex;
    justify-content: center;
`;

export const DeliveredButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #007bff;
    padding: 10px;
    margin: 10px auto;
    border-radius: 8px;

`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 18px;

`;


export const HeaderText = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const SubHeaderText = styled.Text`
    font-size: 14px;

`;

export const OrderItemNum = styled.Text`
    color: #007bff;

`;

export const MenuButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    width: 95%;
    background-color: #007bff;
    padding: 10px;
    margin: 0px auto;
    border-radius: 8px;

`;
