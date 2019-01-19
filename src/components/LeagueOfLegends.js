import React, { Component } from 'react';
import {Row} from 'reactstrap';
import Player from '../components/Player'
import adc from '../images/lol-team/DanxWeb.jpg'
import jungla from '../images/lol-team/EluneWeb.jpg'
import mid from '../images/lol-team/PelirrojoWeb.jpg'
import top from '../images/lol-team/Sr-AnillosWeb.jpg'
import jungla2 from '../images/lol-team/YustyWeb.jpg'
import adc2 from '../images/lol-team/JuanPeaceWeb.jpg'

class LeagueOfLegends extends Component {
      render(){
        return (
            <div>
                <h3 className="text-center m-4 ">League Of Legends</h3>
                <Row>
                    <Player 
                            invocador="Anillos" 
                            name="" 
                            ciudad="Cúcuta" 
                            linea="Superior" 
                            src={top}
                            socialUrl="https://www.facebook.com/SrAnillos/"/>
                    <Player 
                            invocador="Elune" 
                            name="" ciudad="Bogotá" 
                            linea="Jungla" 
                            src={jungla} 
                            socialUrl="https://www.facebook.com/Elunelol/"/>
                    <Player 
                            invocador="Pelirrojo" 
                            name="" 
                            ciudad="Cúcuta" 
                            linea="Medio" 
                            src={mid} 
                            socialUrl="https://www.facebook.com/PelirrojoLool/"/>
                    <Player 
                            invocador="Danx" 
                            name="" 
                            ciudad="Bogotá" 
                            linea="Tirador" 
                            src={adc} 
                            socialUrl="https://www.facebook.com/Danx-378134766271926/"/>
                    <Player 
                            invocador="Yusty" 
                            name="" 
                            ciudad="Jamundí"
                            linea="Jungla" 
                            src={jungla2} 
                            socialUrl="https://www.facebook.com/YustyENP/"/>
                    <Player 
                            invocador="Juan Peace" 
                            name="" 
                            ciudad="Bogotá" 
                            linea="Tirador" 
                            src={adc2} 
                            socialUrl="https://www.facebook.com/"/>
                </Row>
            </div>
        );
    }
    
}

export default LeagueOfLegends;