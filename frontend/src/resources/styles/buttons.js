import styled from 'styled-components';
import { colorPrimary, colorWhite } from './variables';

const _button = `
    border:none;
    border-radius: 4px;
    font-family: 'Lato', sans-serif;
`
const ButtonPrimaryBig = styled.button`
    ${_button}
    background: ${colorPrimary};
    color:white;
    padding:10px 30px;
`
const ButtonSecondaryOutline = styled.button`
    ${_button}
    border: solid 1px ${colorWhite};
    color:white;
    padding:10px 30px;
    background:none;
`

export {
    ButtonPrimaryBig,
    ButtonSecondaryOutline
}