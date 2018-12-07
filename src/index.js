
import  React  from "react";
import ReactDOM from 'react-dom';

import RootComponent from './RootComponent';
import Parent from "./family/parent";
import Alphabet from "./alphabet/alphabet";
import Counter from "./counter/counter";


var position=document.getElementById("root");


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


