import React from "react";
import "../Profile.css";

function Profile() {
  return (
    <div>
      <div className="navbar-custom d-flex bd-highlight mb-3 ">
        <div className="logo mr-auto p-2 bd-highlight">ExpressIt</div>
        <div className="link p-2 bd-highlight align-self-center">Login</div>
        <div className="link p-2 bd-highlight align-self-center">
          Register Now
        </div>
      </div>
      <div className="container-fluid">
        <div className="profile row justify-content-around">
          <div className="user-bar col-md-3">
            <h1 id="welcome">Welcome User</h1>
            <img className="profilepic"src="https://www.w3schools.com/w3images/team2.jpg" alt="John"></img>
            <div className="create"> + Create a New Expresso Write-Up</div>

            <div className="create">
              <h2 id="data">5</h2>
              Favourites
            </div>

            <div className="create ">
              <h2 id="data">3</h2>
              Total Expresso Write-Ups
            </div>

            <div className="create">
              <h2 id="data">.</h2>
              Chat Cafe
            </div>
          </div>

          {/* <div className="user-content col-md-9">
            <div id="user-bio">
              <div id="user-info">
                <h1>User Name : XYZ ABC</h1>
                <h3>Age: 26Years</h3>
                <div id="about-user">About:
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                </div>
              </div>
            </div>
          </div> */}
                <div className="about-me col-md-9">
                <h4 className="aboutmetext">About Me</h4>
                </div>
                  
                 
                <div id="user-posts">
          <div id="user-write-up">
            <h3>Title</h3>
          </div>
        </div>
       
        </div>
      </div>
    </div>

  );
}
export default Profile;
