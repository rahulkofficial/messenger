import React, { useState } from 'react';

function Last() {
   const [canceling,setCaneling]=useState(false)
  return (
    canceling===false?(<div id="last">
        <div className="top">
            <h1>Contact details</h1>
            <a href="/" class='button1' onClick={()=>{setCaneling(true)}}><img src={require("../assets/images/Vector.svg").default} alt="x" /></a>
        </div>
        <div className="profile">
            <img src={require("../assets/images/Profile (4).jpg")} alt="img4" />
            <h1>Michael</h1>
            <p>Online</p>
        </div>
        <div className="media">
            <div className="top">
                <div className="left">
                    <h1>Media</h1>
                    <p>14 picture</p>
                </div>
                <div className="right"><a href="/">View all</a></div>
            </div>
            <div className="bottom">
                <ul>
                    <li><a href="/"><img src={require("../assets/images/image1.jpg")} alt="image1" /></a></li>
                    <li><a href="/"><img src={require("../assets/images/image2.jpg")} alt="image2" /></a></li>
                    <li><a href="/"><img src={require("../assets/images/image1.jpg")} alt="image1" /></a></li>
                    <li><a href="/">+11</a></li>
                </ul>
            </div>
        </div>
        <div className="files">
            <div className="top">
                <div className="left">
                    <h1>Files</h1>
                    <p>12 files</p>
                </div>
                <div className="right"><a href="/">View all</a></div>
            </div>
            <div className="bottom">
                <div className="item">
                    <h5>
                        <div className="top">
                            <img src={require("../assets/images/Component 96.svg").default} alt="co96" />
                            <p>Brief Project Real Es...</p>
                        </div>
                        <div className="bottom">
                            <p>DOCS</p>
                            <p>32KB</p>
                        </div>
                    </h5>
                    <p>12:45PM</p>
                </div>
                <div className="item">
                    <h5>
                        <div className="top">
                            <img src={require("../assets/images/Component 96.svg").default} alt="co96" />
                            <p>Brief Project Real Es...</p>
                        </div>
                        <div className="bottom">
                            <p>DOCS</p>
                            <p>32KB</p>
                        </div>
                    </h5>
                    <p>12:45PM</p>
                </div>
            </div>
        </div>
    </div>):(<div id="cancel"><a href="/" class="button1" onClick={()=>{setCaneling(false)}}>Contact details</a></div>)
  );
}

export default Last;
