import React, {Component} from "react";
// import React from 'react';

class Overlay extends Component {
    state={
        name: "",
        email: "",
        message: "",
        errorName: "",
        errorEmail: "",
        errorTextarea: "",
        success: "",
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errorName: "",
            errorEmail: "",
            errorTextarea: "",
            success: ""
            
        })
    };

    submitHandler = (e) => {
        e.preventDefault();
        
        const errors = {}
        if (this.state.name < 3 || /\s/.test(this.state.name)){
            errors.errorName = "Podane imię jest nieprawidłowe!"
        } 
        if(!/(.+)@(.+){2,}\.(.+){2,}/.test(this.state.email)) {
            errors.errorEmail = "Podany email jest nieprawidłowy!"
        }
        if (this.state.message.length <= 120) {
            errors.errorTextarea = "Wiadomość musii mieć conajmniej 120 znaków!"
        }
        if (!errors.errorName && !errors.errorEmail && !errors.errorTextarea){
            this.setState({
                name: "",
                email: "",
                message: "",
                errorName: "",
                errorEmail: "",
                errorTextarea: "",
               
            })
            
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
            })
            .then(resp => resp.json())
            .then(response => {
                if (response.status === "success") {
                    this.setState({
                        success: "wIADOMOŚĆ ZOSTAŁA WYSŁANA \n Wkrótce skontaktujemy"
                    })
                } else {
                    const errors = {}
                    Object.values(response.errors).forEach(error => {
                        if (error.param === 'message') {
                            errors.errorTextarea = error.msg
                        }

                        if (error.param === 'email') {
                            errors.errorEmail = error.msg
                        }

                        if (error.param === 'name') {
                            errors.errorName = error.msg
                        }
                    })
                    this.setState({
                        ...errors
                    })
                    console.log(response.errors)
                }
            })
            .catch(error => {
                console.log(error)
            })

            
            
        } else {
            this.setState({
                ...errors,
                success: ''
            })
        }  
    };


  
    render() {
        return (
        <div className={"Overlay"} id="overlayScroll">
            <div className={"overlayLeft"}></div>
            <div className={"overlayTitle"}>
                <div className={"overlayText"}>Skontaktuj się z nami</div>
                <div className={"overlayDecoration"}></div>
                <p className={"success"}>{this.state.success}</p>
                <p className={"success1"}>{this.state.success1}</p>
            </div>
            
            <form className={"overlayForm"} onSubmit={this.submitHandler}>
                <label for={"name"} className={"formName"}>Wpisz swoje imię</label>
                <input type={"text"} name={"name"} value={this.state.name} className={"nameInput"} onChange={this.handleChange}/>

                <label for={"email"} className={"formEmail"}>Wpisz swój email</label>
                <input type={"text"} name={"email"} value={this.state.email} className={"emailInput"} onChange={this.handleChange}/>

                <label for={"message"} className={"formMessage"}>Wpisz swoją wiadomość</label>
                <textarea type={"text"} name={"message"} value={this.state.message} className={"textarea"} onChange={this.handleChange}></textarea>

                <p className={"errorName"}>{this.state.errorName}</p>
                <p className={"errorEmail"}>{this.state.errorEmail}</p>
                <p className={"errorTextarea"}>
                {this.state.errorTextarea}</p>

                <button className={"formButton"} type={"submit"}>Wyślij</button>
            </form>
            <div className={"copyright"}>Copyright by Coders Lab</div>
            <div className={"iconFace"}></div>
            <div className={"iconInsta"}></div>
        </div>
        )
    }
}

export default Overlay;
