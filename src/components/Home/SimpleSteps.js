import React from 'react';
import { Link } from 'react-router-dom';

const SimpleSteps = () => (
    <div className={"SimpleSteps"} id="stepsScroll">
        <div className={"stepsTitle"}>
            <div className={"textSimpleSteps"}>Wystarczą 4 proste kroki</div>
            <div className={"stepsDecoration"}></div>
        </div>
        <div className={"stepsBackground"}>
            <div className={"step1"}>
                <div className={"step1Icon"}></div>
                <div className={"stepText"}>Wybierz rzeczy</div>
                <div className={"stepLine"}></div>
                <div className={"stepText2"}>ubrania, zabawki, sprzęt i inne</div>
            </div>
            <div className={"step2"}>
                <div className={"step2Icon"}></div>
                <div className={"stepText"}>Spakuj je</div>
                <div className={"stepLine"}></div>
                <div className={"stepText2"}>skorzystaj z worków na śmieci</div>
            </div>
            <div className={"step3"}>
                <div className={"step3Icon"}></div>
                <div className={"step3Text"}>Zdecyduj komu chcesz pomóc</div>
                <div className={"step3Line"}></div>
                <div className={"step3Text2"}>wybierz zaufane miejsce</div>
            </div>
            <div className={"step4"}>
                <div className={"step4Icon"}></div>
                <div className={"step4Text"}>Zamów kuriera</div>
                <div className={"step4Line"}></div>
                <div className={"step4Text2"}>kurier przyjedzie<br />w dogodnym terminie</div>
            </div>
        </div>
        <Link to="/login" className={"underline"}><button className={"stepsRectangle"}>ODDAJ<br />RZECZY</button></Link>
    </div>
)

export default SimpleSteps;