import React from 'react';
import { connect } from 'react-redux';
import './collection-item.styles.sass';
import { CollectionItemContainer, BackgroundImage, AddToCartButton, CollectionFooterContainer, NameSpan, PriceSpan } from './collection-item.styles';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameSpan>{name}</NameSpan>
                <PriceSpan>${price}</PriceSpan>
            </CollectionFooterContainer>
            <AddToCartButton onClick={() => addItem(item)} inverted> Add to cart </AddToCartButton>
        </CollectionItemContainer>
    )};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);