import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
    padding: 8px 6px;
    cursor: pointer;
    min-width: 55px;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;