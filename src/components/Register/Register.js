// import React from 'react';
import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Register extends Component {
    state={
        email: "",
        pass: "",
        pass2: "",
        errorEmail: "",
        errorPass: "",
        errorPass2: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            errorPass: "",
            errorPass2: "",
            errorEmail: ""
        })
    };

    submitHandler = (e) => {
        e.preventDefault();
        const errors = {}
        if(!/(.+)@(.+){2,}\.(.+){2,}/.test(this.state.email)) {
            errors.errorEmail =  "Podany email jest nieprawidłowy!"
        }

        if(this.state.pass.length >= 6 ) {
            if(this.state.pass !== this.state.pass2) {
                errors.errorPass = 'Hasła nie są identyczne!';
                errors.errorPass2 = 'Hasła nie są identyczne!';
            }
        }
        else {
            errors.errorPass = "Podane hasło jest za krótkie!";
            errors.errorPass2 = "Podane hasło jest za krótkie!";
        }

        if (!errors.errorEmail && !errors.errorPass && !errors.errorPass2){
            this.setState({
                email: "",
                pass: "",
                pass2: "",
                errorEmail: "",
                errorPass: "",
                errorPass2: ""
               
            }) 
        } else {
            this.setState({
                ...errors
            })
        }
    };
    render() {
        return(
        <div className={"artboardLogin"}>
            <div className={""}></div>
            <div className={"topMenu"}>
                <div className={"flex-end"}>
                <div className={"login-register"}>
                        <Link to="/login" className={"underline"}><button className={"login"}>Zaloguj</button></Link>
                        <button className={"register"}>Załóż konto</button> 
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
                <div className={"registerText"}>Załóż konto</div>
                <div className={"loginDecoration"}></div>
            </div>

            <div className={"registerRectangleForm"}>
                <form className={"registerForm"} onSubmit={this.submitHandler}>
                    <div className={"loginEmail"}>
                        <label for="email" className={"labelEmail"}>Email</label>
                        <input type={"text"} name={"email"} value={this.state.email} onChange={this.handleChange} className={"emailInputLogin"} />
                        <p className={"errorEmailLogin"}>{this.state.errorEmail}</p>
                    </div>
                    <div className={"loginPassword"}>
                        <label for="pass" className={"labelPassword"}>Hasło</label>
                        <input type={"password"} name={"pass"} value={this.state.pass} onChange={this.handleChange} className={"passwordInputLogin"} />
                        <p className={"errorPassLogin"}>{this.state.errorPass}</p>
                    </div>
                    <div className={"loginPassword2"}>
                        <label for="pass2" className={"labelPassword2"}>Powtórz hasło</label>
                        <input type={"password"} name={"pass2"} value={this.state.pass2} onChange={this.handleChange} className={"password2"} />
                        <p className={"errorPass2"}>{this.state.errorPass2}</p>
                    </div>
                    <button className={"registerRegister"}type={"submit"} >Załóż konto</button>
                </form>
                <Link to="/login" className={"underline"}><button className={"registerLogin"}>Zaloguj się</button></Link>
            </div>
        </div>
        )
    }
}


export default Register;