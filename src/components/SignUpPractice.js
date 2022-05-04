import React from "react"

import "../styles/SignUpPractice.css"

export default function SignUpPractice() {
    
    const templateData = {
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: false
    };
    
    const [formData, setFromData] = React.useState(templateData);
    
    
    function handleChange(event){
        const {name, value, type, checked } = event.target;
        
            setFromData( prevData => {
                return {
                    ...prevData,
                    [name] : type === "checkbox" ? checked : value
                };
            }
        )
    
    }
    
    function handleSubmit(event) {
        if(formData.password === formData.confirmPassword){
            console.log("Successfully signed up");
            if(formData.newsletter){
                console.log("Thanks for signing up for our newsletter!")
            }
        }
        else{
            console.log("passwords to not match")
        }
        event.preventDefault()
    }
    
    return (
        <div className="sign-up-practice">        
            <div className="form-container-sign-up-practice">
                <form className="form-sign-up-practice" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        placeholder="Email address"
                        className="form--input-sign-up-practice"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        className="form--input-sign-up-practice"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input 
                        type="password" 
                        placeholder="Confirm password"
                        className="form--input-sign-up-practice"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    
                    <div className="form--marketing-sign-up-practice">
                        <input
                            id="okayToEmail"
                            type="checkbox"
                            name="newsletter"
                            checked={formData.newsletter}
                            onChange={handleChange}
                            
                        />
                        <label htmlFor="okayToEmail">I want to join the newsletter</label>
                    </div>
                    <button 
                        className="form--submit-sign-up-practice"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>

    )
}
