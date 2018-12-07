
import  React  from "react";
import ReactDOM from 'react-dom';

import RootComponent from './RootComponent';
import Parent from "./family/parent";
import Alphabet from "./alphabet/alphabet";
import Counter from "./counter/counter";
import LifeCycle from "./lifecycle/lifecycle";
import RemoteAPIData from "./remote/apiData";
import ParentForm from "./form/parentForm";


var position=document.getElementById("root");
var position1=document.getElementById("life");

ReactDOM.render(
<div>
    <RootComponent></RootComponent>
    <hr></hr>
    <Parent nameson="mani" namedaughter="mouni">rvs</Parent>
    <Alphabet fcolor='red' bcolor='yellow'>A</Alphabet>
    <Alphabet fcolor="black" bcolor="pink">B</Alphabet>
     <Alphabet>C</Alphabet> 
     <Alphabet>D</Alphabet>
      <Alphabet>E</Alphabet>
      <hr>
      </hr>
      <Counter> </Counter>
      
    </div>,position);
    ReactDOM.render(
    <div><LifeCycle></LifeCycle> </div>,position1)
    ReactDOM.render(<div><RemoteAPIData></RemoteAPIData></div>,document.getElementById("remote"))
    ReactDOM.render(<div><ParentForm></ParentForm></div>,document.getElementById("form")
    )


