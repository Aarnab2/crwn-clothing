import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'
//import MenuItem from '../../components/menu-item/menu-item.component'
const HomePage = (props) => {
    console.log(props)
    return <div className='homepage'>
    <Directory>
    </Directory>
       </div>
}

export default HomePage;