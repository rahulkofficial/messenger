import React from 'react';

function First() {
  return (
    <div id="first">
        <div className="top">
            <h1><a href="/"><img src={require("../assets/images/chat (1).svg").default} alt="chat1" /></a></h1>
        </div>
        <div className="middle">
            <div className="list">
                <div><a href="/"><img src={require("../assets/images/chats.svg").default} alt="chats" /></a></div>
                <div><a href="/"><img src={require("../assets/images/Property 1=phone.svg").default} alt="phone" /></a></div>
                <div><a href="/"><img src={require("../assets/images/Property 1=video-camera.svg").default} alt="video-camera" /></a></div>
                <div><a href="/"><img src={require("../assets/images/Property 1=users.svg").default} alt="users" /></a></div>
                <div><a href="/"><img src={require("../assets/images/Property 1=setting (1).svg").default} alt="setting" /></a></div>
            </div>
        </div>
        <div className="bottom">
            <div className="list">
                <div><a href="/"><img src={require("../assets/images/icons.svg").default} alt="icons" /></a></div>
                <div><a href="/"><img src={require("../assets/images/Profile (10).jpg")} alt="image8" /></a></div>
            </div>
        </div>
    </div>
  );
}

export default First;
