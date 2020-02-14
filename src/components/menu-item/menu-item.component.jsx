import React from 'react';
import { withRouter } from 'react-router-dom';
//import './menu-item.styles.sass';
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, MenuItemTitle, MenuItemSubtitle } from './menu-item.styles';

//same as props.title --> { title }
const MenuItem = ({ title, size, imageUrl, history, linkUrl, match }) => (
    <MenuItemContainer 
        onClick={() => {history.push(`${match.url}${linkUrl}`)}}
        size={size}
        >
        <BackgroundImageContainer 
            className='background-image'
            imageUrl={imageUrl} 
        />
        <ContentContainer className='content'>
            <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
            <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);