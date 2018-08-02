import styled from 'styled-components';
import { colorInput } from './variables';


const _input = `
    border: none;
    font-size: 20px;
    border: solid 1px ${colorInput};
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 25px;
    width:100%;
    font-family: 'Lato';
    font-weight: bold;
`

const Input = styled.input`
    ${_input}
`

const Textarea = styled.textarea`
    ${_input}
`


export {
    Input,
    Textarea
}