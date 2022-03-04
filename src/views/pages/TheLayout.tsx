import React from 'react'
import Footer from './common/Footer'
import Header from './common/Header'
import Main from './common/Main'

const TheLayout = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <main>
                <Main />
            </main>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default TheLayout