import React, { useState, useEffect } from 'react';

const WhoWeHelp = () => {

    const [state, setState] = useState({
        fundation: null
    })

    useEffect(() => { fetchData('Fundacjom') }, [])

const fetchData = (fundation) => {
    fetch(`http://localhost:3005/fundations/?name=${fundation}`)
    .then(resp => resp.json())
    .then(data => data[0])
    .then(fundation => setState({ fundation }))
}
 const handleChangeFundation = (fundation) => (e) => {
    fetchData(fundation)
 }

    return state.fundation && (
    <div className={"WhoWeHelp"} id="helpScroll">
        {console.log(state)}
        <div className={"helpTitle"}>Komu pomagamy?</div>
        <div className={"helpDecoration"}></div>
        <div className={"helpMenu"}>
            <div className={"help1"} onClick={handleChangeFundation("Fundacjom")}>Fundacjom</div>
            <div className={"help2"} onClick={handleChangeFundation("Organizacjom pozarządowym")}>Organizacjom<br />pozarządowym</div>
            <div className={"help3"} onClick={handleChangeFundation("Lokalnym zbiórkom")}>Lokalnym zbiórkom</div>
        </div>
        
        <div className={"helpFundation"}>
            <div className={"helpText"}>{state.fundation.desc}</div>
           {state.fundation.items.map(el => (
                <div className={"helpFundation1"}>
                    <div className={"helpLeft"}>
                        <div className={"helpLeftTitle dbTitle"}>{el.header}</div>
                        <div className={"helpLeftText dbText"}>{el.subheader}</div>
                    </div>
                <div className={"helpRight dbRight1"}>{el.desc}</div>
                </div>
                
           ))}
           <div className={"helpPagination"}></div>
        </div>
    </div>
)}

export default WhoWeHelp;