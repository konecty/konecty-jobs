import styled from "styled-components";

import banner from './../images/banner.svg';

const grey = '#4A4A4A';

const App = styled.div`
    width:              100%;
`;

const Banner = styled.div`
    position:           relative;
    padding-top:        1.25em;
    background-image:   url(${banner});
    height:             -webkit-fill-available;
    min-height:         -webkit-fill-available;
    width:              100%;

    @media only screen and (max-width:62em){
        padding-top:        0;
    }
`;

const Button = styled.button`
    background: ${ props => props.primary ? '#4BB9E4' : 'transparent'};
    border: ${ props => props.primary ? '1px solid #4BB9E4' : '1px solid white'};
    padding:            0.5em 2em;
    display:            flex;
    align-items:        center;
    color:              white;
    font-size:          1.25em;  
    font-weight:        700;
    font-family:        Lato, sans-serif;
    border-radius:      5px;
    cursor:             pointer;
    width:              fit-content;
    justify-content:    center;
    margin-right:       1em;

    @media only screen and (max-width:62em){
        margin-right:       0;
        margin-top:         0.5em;
        width:              100%;
    }
`;

const ButtonWrapper = styled.div`
    display:            flex;
    flex-direction:     row;
    margin-top:         4em;

    @media only screen and (max-width:62em){
        flex-direction:     column;
        margin-top:         2em;
    }
`;

const Card = styled.div`
    margin-top:         3.5em;
    text-align:         center;
    display:            flex;
    flex-direction:     column;

    @media only screen and (max-width:62em){
        flex-direction:     row;
        align-items:        start;
    }
`;

const CardTitle = styled.div`
    color:              ${grey};
    font-size:          1.5rem;
    font-weight:        700;
    margin:             2rem 0;

    @media only screen and (max-width:62em){
        margin:             1rem 0;
    }
`;

const CardText = styled.div`
    color:              ${grey};
    font-size:          1.25rem;
`;

const Col = styled.div`
    display:            flex;
    flex-direction:     column;    

    @media only screen and (max-width:62em){
        text-align:         left;
        margin-left:        1em;
    }
`;

const Content = styled.div`
    margin-top: 5em;

    @media only screen and (max-width:62em){
        margin-top:       2em;
    }
`;

const Email = styled.div`
    color:              ${grey};
    font-size:          1.5rem;
    font-weight:        700;
`;

const Header = styled.div`
    position:           relative;
    left:               0;
    box-sizing:         border-box;
    z-index:            3;
    width:              100%;
    height:             5.2rem;    
    font-size:          1.125em;
    font-weight:        bold;
    line-height:        normal
    background:         transparent;
    padding-left:       3.75em;
    padding-right:      1.875em;
    display:            flex;
    flex-direction:     row;
    justify-content:    space-between;
    align-items:        center;

    @media only screen and (max-width:62em){
        padding-left:       1.75em;
    }
`;

const Icon = styled.i`
    font-size:          1.5em;
    margin-left:        0.5em;
    color:              white;
    cursor:             pointer;
`;

const IconResponsive = styled.img`
    @media only screen and (max-width:62em){
        width:              2.25em;
        margin-top:         1em;
        margin-left:        2em;
    }
`;

const Input = styled.input`
    width:              100%;
    margin-top:         1em;
    font-size:          1.25rem;
    padding:            0.6em 0 0.6em 1em;
    font-weight:        700;
    font-family:        Lato;
    border:             1px solid #979797;
    color:              ${grey};
`;

const InputContainer = styled.div`
    padding-left:       0;
`;

const Logo = styled.img`
    @media only screen and (max-width:62em){
        width:          170px;
    }
`;

const Main = styled.div`
    padding-bottom:     8em;
`;

const Menu = styled.div`
    position:           fixed;
    background-color:   ${grey}f6;
    width:              100%;
    height:             100vh;
    display:            flex;
    flex-direction:     row;
    align-itens:        start;
    justify-content:    space-between;
    top:                0;
    left:               0;
    font-size:          2rem;
    font-family:        Lato;
    
    & a {
        color:              white;
        text-decoration:    none;
        margin:             0.75em 0 0 1.5em;
    }

    & i {
        margin:             0.5em 0.5em 0 0;
    }
`;

const MenuItens = styled.div`
    display:            flex;
    flex-direction:     column;
`;

const MenuIcon = styled.img`
    cursor:             pointer;
`;

const Navbar = styled.nav`
    width:              38rem;
    display:            flex;
    flex-direction:     row;
    justify-content:    space-between;
    align-items:        center;

    & a {
        color:              white;
        text-decoration:    none;
    }

    @media only screen and (max-width:62em){
        display:            none;
    }
`;

const NavbarResponsive = styled.div`    
    @media only screen and (min-width:62em){
        display:            none;
    }
`;

const Number = styled.div`
    color:              ${grey};
    font-size:          2.25rem;
    font-weight:        900;
`;

const Text = styled.div`
    color: ${ props => !props.main ? 'white' : grey};
    margin-top: ${ props => !props.main ? '4.5rem' : '1.5rem'};

    font-style:         normal;
    font-weight:        normal;
    line-height:        1.5em;
    font-size:          1.25em;
`;

const TextArea = styled.textarea`
    width:              100%;
    margin-top:         1em;
    font-size:          1.25rem;
    padding:            0.6em 0 0.6em 1em;
    font-weight:        700;
    font-family:        Lato;
    resize:             none;
    border:             1px solid #979797;
`;

const Title = styled.div`
    color: ${props => !props.main ? 'white' : 'black'};

    @media only screen and (min-width:62em){
        font-size: ${props => !props.main ? '4rem' : '3rem'};
    }

    font-style:         normal;
    font-weight:        900;
    line-height:        normal;
    font-size:          2.25rem;
`;

const SemiBanner = styled.div`
    position:           relative;
    background-image:   url(${banner});
    height:             5.2rem;
    width:              100%;
`;

export {
    App,
    Banner,
    Button,
    ButtonWrapper,
    Card,
    CardTitle,
    CardText,
    Col,
    Content,
    Email,
    Header,
    Icon,
    IconResponsive,
    Input,
    InputContainer,
    Logo,
    Main,
    Menu,
    MenuIcon,
    MenuItens,
    Navbar,
    NavbarResponsive,
    Number,
    Text,
    TextArea,
    Title,
    SemiBanner
};