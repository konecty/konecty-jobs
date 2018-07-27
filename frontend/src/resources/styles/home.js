import styled from 'styled-components'
import { colorWhite, mediaQueryMobile, marginValue } from './variables'
import BannerImage from '../images/Banner.svg'

const TitleBanner = styled.p`
    font-size: 64px;
    color: ${colorWhite};
    font-family: 'Lato', sans-serif;
    font-weight: 600;

    ${mediaQueryMobile(`
       font-size:42px; 
    `)}
`;

const DescriptionBanner = styled.p`
    font-size: 20px;
    color: ${colorWhite};
    font-style: normal;
    font-weight: normal;
    margin-top: 50px;
`

const Banner = styled.div`
    min-height: 100vh;
    background-image: url(${BannerImage});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

const InfoBannerContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const InfoBanner = styled.div`
    max-width: 960px;
    text-align: left;
    padding: 10px;
`
const ButtonContainerBanner = styled.div`
    display:flex;
    margin-top: 50px;
    ${mediaQueryMobile(`
        flex-direction: column;
    `)}
`

const ButtonContactBanner = styled.div`
    margin-left:${marginValue}

    ${mediaQueryMobile(`
        margin-left: 0;
        margin-top: ${marginValue}
    `)}

    & > button{
        width: 100%;
    }
`
const ItemInfoProductContainer = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap: wrap;

`

const ItemInfoProduct = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${mediaQueryMobile(`
        width: 100%;
        flex-direction:row;
    `)}
`

const ItemInfoProductHeader = styled.div`
    width: 100%;
    display:flex;
    flex-direction:column;
    height: 75px;
    align-items: center;
    margin-bottom:${marginValue};
    

    ${mediaQueryMobile(`
        margin-bottom:0px;
        width: 60px;
        height: 100%;

        & > img{
            margin-top: ${marginValue}
            width: 30px;
        }
    `)}
`

const ItemInfoContent = styled.div`
    text-align: center;

    ${mediaQueryMobile(`
        text-align: left;
        padding: ${marginValue}
    `)}
`

export {
    TitleBanner,
    DescriptionBanner,
    Banner,
    InfoBannerContainer,
    InfoBanner,
    ButtonContainerBanner,
    ButtonContactBanner,
    ItemInfoProduct,
    ItemInfoProductContainer,
    ItemInfoProductHeader,
    ItemInfoContent
}