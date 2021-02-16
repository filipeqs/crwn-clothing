import React from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

import SHOP_DATA from './shop.data';

class Shop extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default Shop;
