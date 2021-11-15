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
        setInterval(()=>{this.state.monsterImage===monsterLeft?this.setState({monsterImage:monsterRight}):this.setState({monsterImage:monsterLeft})},3000)
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
                        
                        <div className="innermost-Dome row">
                        <img name="stats" className="col" src={stats} onClick={(e)=>this.activateTab(e)} alt=""/>  
                        <img name="chicken" className="col" src={chicken} onClick={(e)=>this.activateTab(e)} alt=""/>
                        <img name="weights" className="col" src={weights} onClick={(e)=>this.activateTab(e)} alt=""/>
                        <img name="swords" className="col" src={swords} onClick={(e)=>this.activateTab(e)} alt=""/>
                        <img name="firstAid" className="col" src={firstAid} onClick={(e)=>this.activateTab(e)} alt=""/>
                        <img name="shit" className="col" src={shit} onClick={(e)=>this.activateTab(e)} alt=""/>
                       <div className="playBoard">
                           
                           {this.state.tab==="Connecting"?<p>CONNECT</p>:""}
                           {this.state.tab==="stats"? <div className="stats">
                          <div className="row">
                              <div className="col">AGE</div>
                              <div className="col">1</div>
                          </div>
                          <div className="row">
                              <div className="col">BIRTHSTONE</div>
                              <div className="col">RUBY</div>
                          </div>
                          <div className="row">
                          <div className="col">BREED</div>
                          <div className="col">123</div> 
                          </div>
                          <div className="row">
                              <div className="col">TYPE</div>
                              <div className="col">4X</div>
                          </div></div>:""}

                 {this.state.tab==="monsterButton"?<div className="Monster"><img src={this.state.monsterImage} /></div>:""}      
                       </div>
                       
                        </div>  
                   <div className="row options"> 
                   
                    <div className="scoreCard col-2">
                        {this.state.tab==="Connecting"?<span>CONNECT</span>:"4350"}
                    </div>
                    <div className="col bar justify-content-end"><i class="fas fa-bars"></i></div>
                    <div className="col"><img src={button} className="button" alt="" onClick={(e)=>this.activateTab(e)} name="monsterButton"/></div>
                    </div>
                </div>
           </div>
       </div>
    }
}

export default Dome;