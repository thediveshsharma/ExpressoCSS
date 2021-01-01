import React from 'react'
import '../CreateProfile.css'

function CreateProfile() {
    return (
        <div id="create-profile">
            <h1>Create Your <strong>ExpressIt</strong> Profile</h1>
            <p>We would like to know you better. Tell us about yourself.</p>

            <form>
                <div>What is your Name?</div>
                <input type="text" name="name" /><br />

                <div>How old are you?</div>
                <input type="text" name="age"/><br />

                <div>Describe yourself in short</div>
                <textarea type="text" name="about"/><br />

                <input type="submit" value="Create Profile" className="submit-btn"/>
            </form>
        </div>
    )
}

export default CreateProfile
