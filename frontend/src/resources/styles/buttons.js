import styled from 'styled-components';
import { colorPrimary, colorWhite, mediaQueryMobile } from './variables';

const _button = `
    border:none;
    border-radius: 4px;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    padding:15px 30px;
`
const ButtonPrimaryBig = styled.button`
    ${_button}
    background: ${colorPrimary};
    color:white;
`
const ButtonSecondaryBigOutline = styled.button`
    ${_button}
    border: solid 1px ${colorWhite};
    color:white;
    background:none;
`

const ImageIconButton = styled.img`
    width:10px;
`

export {
    ButtonPrimaryBig,
    ButtonSecondaryBigOutline,
    ImageIconButton
}