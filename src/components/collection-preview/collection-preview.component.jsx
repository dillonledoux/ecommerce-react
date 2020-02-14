import React from 'react';

import { CollectionPreviewContainer, TitleHeader, PreviewContainer } from '../collection-preview/collection-preview.styles';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <TitleHeader>{title.toUpperCase()}</TitleHeader>
        <PreviewContainer>
            {
                items.filter((item, index) => index<4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default CollectionPreview;