// import React from 'react';
import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Login extends Component { 
    state={
        email: "",
        pass: "",
        errorEmail: "",
        errorPass: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errorPass: "",
            errorEmail: ""
        })
    };

    submitHandler = (e) => {
        e.preventDefault();
        const errors = {}
        if(!/(.+)@(.+){2,}\.(.+){2,}/.test(this.state.email)) {
            errors.errorEmail =  "Podany email jest nieprawidłowy!"
        }
        if (this.state.pass.length < 6) {
            errors.errorPass = "Podane hasło jest za krótkie!"
        }
        if (!errors.errorEmail && !errors.errorPass){
            this.setState({
                email: "",
                pass: "",
                errorEmail: "",
                errorPass: "",
               
            }) 
        } else {
            this.setState({
                ...errors
            })
        }
    };

    render() {
        return (
        <div className={"artboardLogin"}>
            <div className={""}></div>
            <div className={"topMenu"}>
                <div className={"flex-end"}>
                <div className={"login-register"}>
                        <button className={"login"}>Zaloguj</button>
                        <Link to="/register" className={"underline"}><button className={"register"}>Załóż konto</button></Link>
                    </div> 
                </div>
                <div className={"navigation"}>
                    <Link to="/" className={"underline"}><button className={"start"}>Start</button></Link>
                    <button className={"info"}>O co chodzi?</button>
                    <button className={"about"}>O nas</button>
                    <button className={"fundation"}>Fundacja i organizaje</button>
                    <button className={"contact"}>Kontakt</button>
                </div>
            </div>

            <div className={"loginTitle"}>
                <div className={"loginText"}>Zaloguj się</div>
                <div className={"loginDecoration"}></div>
            </div>

            <div className={"loginRectangleForm"}>
                <form className={"loginForm"} onSubmit={this.submitHandler}>
                    <div className={"loginEmail"}>
                        <label for={"email"} className={"labelEmail"}>Email</label>
                        <input type={"text"} name={"email"} value={this.state.email} onChange={this.handleChange} className={"emailInputLogin"} />
                        <p className={"errorEmailLogin"}>{this.state.errorEmail}</p>
                    </div>
                    <div className={"loginPassword"}>
                        <label for={"pass"} className={"labelPassword"}>Hasło</label>
                        <input type={"password"} name={"pass"} value={this.state.pass} onChange={this.handleChange} className={"passwordInputLogin"} />
                        <p className={"errorPassLogin"}>{this.state.errorPass}</p>
                    </div>
                    
                  <button className={"loginLogin"} type={"submit"}>Zaloguj się</button>  
                  
                </form>
                <Link to="/register" className={"underline"}><button className={"loginRegister"}>Załóż konto</button></Link>
                
                
            </div>
            
        </div>
 
    )
    }
}

export default Login;
