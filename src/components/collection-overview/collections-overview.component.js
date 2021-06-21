import React from 'react'
import './collections-overview.styles.scss'
import CollectionPreview from '../preview-collection/collection-preview.component'
import { connect } from 'react-redux'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'

const CollectionsOverview = ({collections})=>(
    <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => {
            return <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
        })}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps,null)(CollectionsOverview)