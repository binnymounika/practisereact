
import  React  from "react";
import ReactDOM from 'react-dom';

import RootComponent from './RootComponent';
import Parent from "./family/parent";


var position=document.getElementById("root");


ReactDOM.render(
<div>
    <RootComponent></RootComponent>
    <hr></hr>
    <Parent></Parent>
    </div>,position);


