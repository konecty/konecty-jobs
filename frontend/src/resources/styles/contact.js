import styled from 'styled-components';
import { textColor } from './variables';

const PhoneNumber = styled.span`
    display: block;
    font-size: 36px;
    font-weight: bold;
    font-family: 'Lato'
`;

const ContactAddress = styled.span`
    margin-top:20px;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Lato'
`;

const InfoContactContainer = styled.div`
    margin: 80px 0;
    color: ${textColor}
`;

export {
    PhoneNumber,
    ContactAddress,
    InfoContactContainer
}