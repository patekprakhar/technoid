import "./FormStyles.css";

import React from "react";

const Form = () => {
    return <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Subject</label>
            <input type="text" name="subject" />
            <label>Number</label>
            <input type="number" name="number" />
            <label>Message</label>
            <textarea rows='6' placeholder=" Type your message here" />
            <button className="btn2 btn-light">Submit</button>
        </form>
        <p>By submitting my data I agree to be contacted</p>
    </div>
}

export default Form  