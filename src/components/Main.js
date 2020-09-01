import React, { Component } from 'react';
import './Main.css';
import 'tachyons';


document.body.style.backgroundColor = "#d8e6d9";


const check = () =>{
    let avatar = document.getElementById('name').value;
    let img = document.getElementById('avatarimg');

    img.src = `https://joeschmoe.io/api/v1/${avatar}`;
}


class Main extends Component{
    render(){
        return(
            <div className="main-area tc">
                <h1>Check Your Avatar By Typing Your Name</h1>
                <div className="avatar-card ba grow tc">
                   
                        <img src="https://joeschmoe.io/api/v1/random" alt="avatar" id="avatarimg"></img>
            
                </div>
                <input type="text" className="grow b--dashed" placeholder="Your Name" id="name" autoComplete="off"></input>
                <button className="grow" id="submit" onClick={check}>Check Avatar</button>
            </div>
        );
    }
}


export default Main;