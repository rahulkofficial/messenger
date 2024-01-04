import React from 'react';

function Second() {
  return (
    <div id="second">
        <div className="top">
            <div className="left">
                <div className="image">
                    <h1><img src={require("../assets/images/Profile (15).jpg")} alt="image22" /></h1>
                </div>
                <div className="content">
                    <h1>Bujange bapak</h1>
                    <p>My Account</p>
                </div>
            </div>
            <div className="right">
                <a href="/"><img src={require("../assets/images/Option.svg").default} alt="option" /></a>
            </div>
        </div>
        <div className="middle">
            <div className="top">
                <form action="">
                    <img src={require("../assets/images/search.svg").default} alt="search" />
                    <input type="text" placeholder="Search or start new chat..." />
                </form>
            </div>
            <div className="bottom">
                <div className="head">
                    <h1>Online now</h1>
                    <a href="/">More <img src={require("../assets/images/gt.svg").default} alt="more" /></a>
                </div>
                <div className="list">
                    <ul>
                        <li>
                            <img src={require("../assets/images/Profile (12).jpg")} alt="img1" />
                            <span className="omline"></span>
                            <a href="/">More</a>
                        </li>
                        <li>
                            <img src={require("../assets/images/Profile (2).jpg")} alt="img2" />
                            <span className="omline"></span>
                            <a href="/">More</a>
                        </li>
                        <li>
                            <img src={require("../assets/images/Profile (13).jpg")} alt="img1" />
                            <span className="omline"></span>
                            <a href="/">More</a>
                        </li>
                        <li>
                            <img src={require("../assets/images/Profile (4).jpg")} alt="img1" />
                            <span className="omline"></span>
                            <a href="/">More</a>
                        </li>
                        <li>
                            <img src={require("../assets/images/Profile (3).jpg")} alt="img1" />
                            <span className="omline"></span>
                            <a href="/">More</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bottom">
            <h1>Messages</h1>
            <p>20</p>
            <div className="items">
                <div className="item clickable">
                    <div className="left">
                        <div className="img">
                            <img src={require("../assets/images/Profile (7).jpg")} alt="profile7" id="1" className="click" />
                            <span className="Online"></span>
                        </div>
                        <div className="content">
                            <h1>Putra Pratama</h1>
                            <p>hey, how are you man?</p>
                        </div>
                    </div>
                    <div className="right">
                        <img src={require("../assets/images/grey dots.svg").default} alt="gdots" />
                        <p>12:45PM</p>
                    </div>
                </div>
                <div className="item clickable">
                    <div className="left">
                        <div className="img">
                            <img src={require("../assets/images/Profile (3).jpg")} alt="profile3" className="click" />
                            <span className="Online"></span>
                        </div>
                        <div className="content">
                            <h1>Michael</h1>
                            <p className="typing">Typing...</p>
                        </div>
                    </div>
                    <div className="right">
                        <img src={require("../assets/images/grey dots.svg").default} alt="gdots" />
                        <p>12:45PM</p>
                    </div>
                </div>
                <div className="item clickable">
                    <div className="left">
                        <div className="img">
                            <img src={require("../assets/images/Profile (1).jpg")} alt="profile1" className="click" />
                        </div>
                        <div className="content">
                            <h1>Jarow</h1>
                            <p>Good morning</p>
                        </div>
                    </div>
                    <div className="right">
                        <img src={require("../assets/images/grey dots.svg").default} alt="gdots" />
                        <p>12:45PM</p>
                    </div>
                </div>
                <div className="item clickable">
                    <div className="left">
                        <div className="img">
                            <img src={require("../assets/images/Profile (8).jpg")} alt="profile8" className="click" />
                        </div>
                        <div className="content">
                            <h1>Kasmad</h1>
                            <p>hey, how are you man?</p>
                        </div>
                    </div>
                    <div className="right">
                        <img src={require("../assets/images/grey dots.svg").default} alt="gdots" />
                        <p>12:45PM</p>
                    </div>
                </div>
                <div className="item clickable">
                    <div className="left">
                        <div className="img">
                            <img src={require("../assets/images/Profile (6).jpg")} alt="profile6" className="click" />
                            <span className="Online"></span>
                        </div>
                        <div className="content">
                            <h1>Mawar</h1>
                            <p>hey, how are you man?</p>
                        </div>
                    </div>
                    <div className="right">
                        <img src={require("../assets/images/grey dots.svg").default} alt="gdots" />
                        <p>12:45PM</p>
                    </div>
                </div>
                <div className="item clickable">
                    <div className="left">
                        <div className="img">
                            <img src={require("../assets/images/Profile (9).jpg")} alt="profile9" className="click" />
                        </div>
                        <div className="content">
                            <h1>Melati</h1>
                            <p>hey, how are you man?</p>
                        </div>
                    </div>
                    <div className="right">
                        <img src={require("../assets/images/grey dots.svg").default} alt="gdots" />
                        <p>12:45PM</p>
                    </div>
                </div>
            </div>
            <div className="big">
                <div>
                    <img src={require("../assets/images/Profile (1).jpg")} alt="none" className="popup" />
                    <img src={require("../assets/images/Vector.svg").default} alt="x" className="cancel" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Second;
