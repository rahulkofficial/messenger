import React,{useEffect} from 'react';
import {Row,Col} from 'react-bootstrap';
import $ from 'jquery';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import First from './components/screens/First';
import Second from './components/screens/Second';
import Third from './components/screens/Third';
import Last from './components/screens/Last';

function App() {
    let jqueryCode=()=>{
    $("a.button1").on("click",(e)=>{
      e.preventDefault();
    })
    $(".click").on("click",(e)=>{
      let vari=$(e.target).attr('src');
      let img=$(".big");
      $(".big .popup").attr('src',vari);
      img.addClass("active");
      let src=$("#third");
      src.addClass("none");
    })
    $(".cancel").on("click",()=>{
        let img=$(".big");
        img.removeClass("active");
        let src=$("#third");
        src.removeClass("none");
        src.removeClass("active");
    })
    $(".clickable").on("click",()=>{
        let src=$("#third");
        src.addClass("active");
    })
    $(".canc").on("click",()=>{
        let src=$("#third");
        src.removeClass("active");
    })
  }
  useEffect(()=>{
    jqueryCode();
  },[]);


  return (
    <div id='main'>
        <Row>
          <Col lg="1" sm="1" className='column' >
            <First />
          </Col>
          <Col lg="3" sm="4" xs="12" className='column'>
            <Second />
          </Col>
          <Col lg="5" sm="7" xs="12" className='column'>
            <Third />
          </Col >
          <Col lg="3" className='column'>
            <Last />
          </Col>
        </Row>
    </div>
  );
}

export default App;
