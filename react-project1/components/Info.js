import React from "react"


export default function Info () {
    return (
        <div className="info">
            <img src="../image/picture.jpg" className="card--picture" />
            <h1>Rotimi Ishola</h1>
            <h3>Frontend Developer</h3>
            <p>rotimiishola@website</p>
            <div className="buttons">
                <button>
                    <img src="../image/mail-fill.png" className="email-img"/>
                    Email
                </button>
                <button>
                    <img src="../image/linkedin-box-fill.png" className="linkedin-img"/>
                    Linkedin
                </button>
            </div>
        </div>
    )
}