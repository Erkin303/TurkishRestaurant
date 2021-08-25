import React from 'react'
import Footer from './footer'
import Header from './header'

const All = ({children}) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
            
        </div>
    )
}

export default All
