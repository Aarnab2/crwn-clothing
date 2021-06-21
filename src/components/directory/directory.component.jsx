import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'
import { connect } from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ title, id, imageUrl, size, linkUrl }) => (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}></MenuItem>))
        }  
    </div>
)

// const mapStateToProps = (state)=>{
// return {
// sections: state.directory.sections
// }
// }
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps,null)(Directory)