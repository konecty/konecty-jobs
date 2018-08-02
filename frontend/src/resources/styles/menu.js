import styled from 'styled-components';
import { colorWhite } from './variables';

const Menu = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    position: fixed;
    width: 100%;
    height: 100vh;
    align-items: center;
    background: #273743;
    top: 0;
    left: 0;
`

const MenuItem = styled.span`
    width: 100%;
    text-align: center;
    font-size: 36px;
    color: white;
    margin-bottom: 20px;
    transition: all 0.2s;
    cursor:pointer;

    & > a{
        text-decoration: none;
        color: ${colorWhite};
    }
`

const MenuAction = styled.div`
    width: 100%;
    position: absolute;
    height: 30px;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    padding: 30px;

    & > img{
        height:100%;
    }
`

export  {
    Menu,
    MenuItem,
    MenuAction
}