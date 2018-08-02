import styled from 'styled-components';
import { mediaQueryMobile } from './variables';

const Row = styled.div`
    display: flex;
    ${mediaQueryMobile(`
        flex-direction : column;
    `)}
`;

const Col = styled.div`
    flex: ${props => props.theme.flex || 1}
    padding: 0 10px;
`

export {
    Row,
    Col
}