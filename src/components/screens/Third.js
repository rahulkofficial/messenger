import React, { useState } from 'react';

function Third() {
  
 
  const [isRecording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setAudioChunks([...audioChunks, event.data]);
          }
        };

        recorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            console.log('Audio URL:', audioUrl);
          };
  
          recorder.start();
          setIsRecording(true);
        })
        .catch((error) => {
          console.error('Error accessing the microphone:', error);
        });
    };
  
    const stopRecording = () => {
      if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        setIsRecording(false);
      }
    };

      const recording=()=>{
        if(isRecording===false){
            return(
                <img src={require("../assets/images/Group 3465393.svg").default} alt="mic" onClick={startRecording}  />
            )
        }
        else{
            return(
                <div class="cancel">
                    <img src={require("../assets/images/Vector.svg").default} alt="attachment" onClick={stopRecording} />
                    <p>recording...</p>
                </div>         
            )  
        }
      }

  return (
    <div id="third">
                <div className="top">
                    <div className="left">
                        <div className="img">
                            <img src={require("../assets/images/Profile (9).jpg")} alt="profile9" />
                        </div>
                        <div className="content">
                            <h1>Michael</h1>
                            <p className="typing">Typing...</p>
                        </div>
                    </div>
                    <div className="right">
                        <ul>
                            <li><a href="/"><img src={require("../assets/images/Property 1=phone.svg").default} alt="phone" /></a></li>
                            <li><a href="/"><img src={require("../assets/images/Property 1=video-camera.svg").default} alt="video-camera" /></a></li>
                            <li><a href="/"><img src={require("../assets/images/Option.svg").default} alt="option" /></a></li>
                            <li><img src={require("../assets/images/Vector.svg").default} alt="option" class="canc" /></li>
                        </ul>
                    </div>
                </div>
                <div className="middle">
                    <h4>Today</h4>
                    <div className="items">
                        <div className="item">
                            <h5>Hello, Nizar Ali</h5>
                            <p>12:45PM</p>
                        </div>
                        <div className="item">
                            <div className="top">
                                <div className="left">
                                    <h5>Good afternoon, may i ask your help to male me a reel estate landing page, 
                                    for more details i will send as soon as
                                    yoe approve it. thanks!</h5>
                                </div>
                                <div className="right">
                                    <ul>
                                        <li><a href="/"><img src={require("../assets/images/Property 1=white share.svg").default} alt="share" /></a></li>
                                        <li><a href="/"><img src={require("../assets/images/Group 3465392.svg").default} alt="gr92" /></a></li>
                                        <li><a href="/"><img src={require("../assets/images/White Option.svg").default} alt="opw" /></a></li>
                                    </ul>
                                    <a href="/"><img src={require("../assets/images/white send.svg").default} alt="send" /></a>
                                </div>
                            </div>
                            <div className="bottom">
                                <ul>
                                    <li><img src={require("../assets/images/emojione_thumbs-up.svg").default} alt="eth" /></li>
                                    <li><img src={require("../assets/images/Group 3465375.svg").default} alt="gr75" /></li>
                                </ul>
                                <p>12:45PM</p>
                            </div>
                        </div>
                        <div className="item blue">
                            <h5>Haii. Michael!</h5>
                            <div className="bottom right">
                                <img src={require("../assets/images/Blue dots.svg").default} alt="blue dots" />
                                <p>12:45PM</p>
                            </div>
                        </div>
                        <div className="item blue">
                            <h5>Thank you for the offer you gave me, yes i will accept the proect from you, for the brief please send it now so I can
                                study it first</h5>
                            <div className="bottom">
                                <img src={require("../assets/images/Blue dots.svg").default} alt="blue dots" />
                                <p>12:45PM</p>
                            </div>
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
                        <div className="item blue">
                            <h5>Ohh i see, for paymet we can directly discuss now</h5>
                            <div className="bottom">
                                <img src={require("../assets/images/grey dots.svg").default} alt="gray dots" />
                                <p>12:45PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="content">
                        <div class="upload">
                            <img src={require("../assets/images/attachment 2.svg").default} alt="attachment" />
                            <input type='file' name='hai' />
                        </div>
                        <form action="" class="text">
                            <input type="text" placeholder="Message to Tedy..." />
                            <a href="/"><img src={require("../assets/images/Group 3465380.svg").default} alt="gp80" /></a>
                        </form>
                        { recording() }
                    </div>
                </div>
            </div>

  );
}

export default Third;
