import React,{Component, setState} from "react";
import './Dome.css';
import light from './icons/light.png';
import stats from './icons/1.png';
import chicken from './icons/2.png';
import weights from './icons/3.png';
import swords from './icons/4.png';
import firstAid from './icons/5.png';
import shit from './icons/7.png';
import button from './icons/button.png';
import monsterLeft from './icons/left-monster.png'
import monsterRight from './icons/right-monster.png'


class Dome extends Component {

    constructor() {
        super();
        
        this.state={
            tab:"Connecting" ,
            monsterImage:monsterLeft,      
        };
        console.log( monsterRight)
    }
    componentDidMount() {
        setInterval(()=>{this.state.monsterImage==monsterLeft?this.setState({monsterImage:monsterRight}):this.setState({monsterImage:monsterLeft})},3000)
    }
    activateTab(e){
        const id = e.target.name;
        
        this.setState({
            tab : id
        });
    }
    playBoardDisplay=()=>{
        if(this.state.tab==="Connecting") return <p>CONNECT</p>;
        else if(this.state.tab==="stats")  return (<div>
                      <table>
                          <tr>
                              <td>AGE</td>
                              <td>1</td>
                          </tr>
                          <tr>
                              <td>BIRTHSTONE</td>
                              <td>RUBY</td>
                          </tr>
                          <tr>
                          <td>BREED</td>
                          <td>123</td> 
                          </tr>
                          <tr>
                              <td>TYPE</td>
                              <td>4X</td>
                          </tr>
                      </table>
            </div>);
        
        
    }
    
    render() {
       return <div  className="Dome">
           <div className="innerDome">
                <div className="inner-inner-Dome" >
                    
                    <img src={light} className="light1" alt=""/>
                    <img src={light} className="light2" alt=""/>
                        
                        <div className="innermost-Dome">
                        <img name="stats" src={stats} onClick={(e)=>this.activateTab(e)} alt=""/>  
                        <img name="chicken" src={chicken} onClick={(e)=>this.activateTab(e)} alt=""/>
                        <img name="weights" src={weights} onClick={(e)=>this.activateTab(e)} alt=""/>
                        <img name="swords" src={swords} onClick={(e)=>this.activateTab(e)} alt=""/>
                        <img name="firstAid" src={firstAid} onClick={(e)=>this.activateTab(e)} alt=""/>
                        <img name="shit" src={shit} onClick={(e)=>this.activateTab(e)} alt=""/>
                       <div className="playBoard">
                           
                           {this.state.tab==="Connecting"?<p>CONNECT</p>:""}
                           {this.state.tab==="stats"?<div>
                      <table>
                          <tr>
                              <td>AGE</td>
                              <td>1</td>
                          </tr>
                          <tr>
                              <td>BIRTHSTONE</td>
                              <td>RUBY</td>
                          </tr>
                          <tr>
                          <td>BREED</td>
                          <td>123</td> 
                          </tr>
                          <tr>
                              <td>TYPE</td>
                              <td>4X</td>
                          </tr>
                      </table>
            </div>:""}

                 {this.state.tab==="monsterButton"?<img src={this.state.monsterImage} className="Monster"/>:""}      
                       </div>
                       
                        </div>  
                    
                    <div className="scoreCard">
                        {this.state.tab==="Connecting"?<center>CONNECT</center>:"4350"}
                    </div>
                    <img src={button} className="button" alt="" onClick={(e)=>this.activateTab(e)} name="monsterButton"/>
                    
                </div>
           </div>
       </div>
    }
}

export default Dome;