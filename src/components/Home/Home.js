import React from "react";
import Header from './Header';
import Column from './Column';
import SimpleSteps from './SimpleSteps';
import About from './About';
import WhoWeHelp from './WhoWeHelp';
import Overlay from './Overlay';

const Home = () => (
    <>
        <div className={"Artboard"}>
           <Header /> 
           <Column />
           <SimpleSteps />
           <About />
           <WhoWeHelp />
           <Overlay />
        </div>
        
        
    </>
)

export default Home;