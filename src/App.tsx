import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"


import UtilityBar from "./components/UtilityBar"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Industries from "./components/Industries"
import Applications from "./components/Applications"
function App() {
    return (
        <div className="App">
            <UtilityBar />
            <Header />
            <Hero />
            {/* <BrandsDrawer /> */}
            <Industries />
            <Applications />
            {/* <NewsAndEvents />
            <Careers />
            <Invest />
            <Footer /> */}
        </div>

    )

}



export default App

