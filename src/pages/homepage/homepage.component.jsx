import React from 'react'
import Directory from '../../components/directory/directory.component'
import { HomepageContainer } from './homepage.styles'
//import MenuItem from '../../components/menu-item/menu-item.component'
const HomePage = (props) => {
    console.log(props)
    return <HomepageContainer>
    <Directory>
    </Directory>
    </HomepageContainer>
}

export default HomePage;