import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.sass'

import CollectionItem from '../../components/collection-item/collection-item.component';


const CollectionPage = ({ collection }) => {
<<<<<<< HEAD
    const { title, items } = collection;
    
=======
    console.log(collection);
    const { title, items } = collection;
>>>>>>> a33d22789468a3ccef3efd033fa093bbce8ab2d8
    return(
    <div className='collection-page'>
        <h2 className='title'>{ title }</h2>
        <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item} />
<<<<<<< HEAD
                ))
            }
=======
            ))}
>>>>>>> a33d22789468a3ccef3efd033fa093bbce8ab2d8
        </div>
    </div>)
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);