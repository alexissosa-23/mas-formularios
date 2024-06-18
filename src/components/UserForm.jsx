import React, { useState } from 'react';

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validateFirstName = (value) => {
        setFirstName(value);
        if (value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const validateLastName = (value) => {
        setLastName(value);
        if (value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }

    const validateEmail = (value) => {
        setEmail(value);
        if (value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }

    const validatePassword = (value) => {
        setPassword(value);
        if (value.length < 8) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }

    const validateConfirmPassword = (value) => {
        setConfirmPassword(value);
        if (value !== password) {
            setConfirmPasswordError("Passwords must match");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => validateFirstName(e.target.value)} />
                {firstNameError && <p style={{color: 'red'}}>{firstNameError}</p>}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => validateLastName(e.target.value)} />
                {lastNameError && <p style={{color: 'red'}}>{lastNameError}</p>}
            </div>
            <div>
                <label>Email: </label>
                <input type="email" value={email} onChange={(e) => validateEmail(e.target.value)} />
                {emailError && <p style={{color: 'red'}}>{emailError}</p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => validatePassword(e.target.value)} />
                {passwordError && <p style={{color: 'red'}}>{passwordError}</p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={(e) => validateConfirmPassword(e.target.value)} />
                {confirmPasswordError && <p style={{color: 'red'}}>{confirmPasswordError}</p>}
            </div>
        </form>
    );
}

export default UserForm;
