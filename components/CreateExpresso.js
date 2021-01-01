import React from 'react'
import '../CreateExpresso.css'

function CreateExpresso() {
    return (
        <div id="write-up">
            <div id="write-up-info">
                <h1>Make your own <strong>Expresso</strong> Write-Up!</h1>
                <p>Express yourself and share the experience with others in your own words.</p>
            </div>

            <div id="write-up-content">
            <form>
                <div>Title of your Expresso</div>
                <input type="text" name="title" className="write-up-input"/><br />

                <div>Category of your Expresso:</div>
                <select>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Music">Music</option>
                    <option value="Art">Art</option>
                    <option value="Fitness">Fitness</option>
                    <option value="DIY">DIY</option>
                    <option value="Sports">Sports</option>
                    <option value="Finance">Finance</option>
                    <option value="Business">Business</option>
                    <option value="Personal">Personal</option>
                    <option value="Movies/TV Show">Movies/TV Show</option>
                    <option value="News">News</option>
                    <option value="Fan Theory">Fan Theory</option>
                </select>

                <div>Your Expresso!</div>
                <textarea type="text" name="about" className="article"/><br />

                <input type="submit" value="Create Expresso" className="submit-btn"/>
            </form>
            </div>
        </div>
    )
}

export default CreateExpresso
