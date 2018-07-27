import styled from 'styled-components'
import { colorWhite } from './variables'
import BannerImage from '../images/Banner.svg'

const TitleBanner = styled.p`
    font-size: 64px;
    color: ${colorWhite};
    font-family: 'Lato', sans-serif;
    font-weight: 600;
`;

const DescriptionBanner = styled.p`
    font-size: 20px;
    color: ${colorWhite};
    font-style: normal;
    font-weight: normal;
`

const Banner = styled.div`
    height: 100vh;
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
    max-width: 840px;
    text-align: left;
    padding: 10px;
`


export {
    TitleBanner,
    DescriptionBanner,
    Banner,
    InfoBannerContainer,
    InfoBanner
}