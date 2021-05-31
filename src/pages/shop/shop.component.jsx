import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/preview-colleection/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return <div className='shop-PAGE'>
            {collections.map(({id, ...otherCollectionProps}) => {
              return <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            })}
        </div>
    }
}

export default ShopPage