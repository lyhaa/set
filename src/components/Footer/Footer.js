import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
// import{withRouter} from '';
import Hoc from '../HOC/Hoc';
import emitter from '../../ev';


export default Hoc(class Footer extends React.Component{
    // :{};
    constructor(props){
        super(props);
        this.state = {
            ssrc: true,
            sboos:false,
            smy:false
        }
    }
    render(props){
        const bonn = (bi)=>{
            return ()=>{
                emitter.emit("dnno",bi)
            }
        }
        return(
            <div className={"footer"}>
                <ul>
                    {/* {console.log(this)} */}
                    <Link to = "/" >
                    <li 
                     onClick = {
                         () => {
                             this.setState({
                                 ssrc: true,
                                 sboos: false,
                                 smy: false,
                                 bon:true
                             });
                             bonn(true);
                             console.log(this)
                         }
                     } >
                        <img
                        src={
                            this.state.ssrc ? "https://m.sparke.cn/_nuxt/img/43014e4.png" : "https://m.sparke.cn/_nuxt/img/b3cb49d.png"
                        } alt="" />
                        <p>首页</p>
                    </li>
                    </Link>
                    <Link to="/Bookrack">
                    <li
                     onClick = {
                         () => {
                             this.setState({
                                 ssrc: false,
                                 sboos: true,
                                 smy: false
                             })
                             bonn(true);
                         }
                     }
                    >
                        <img
                        src={
                            this.state.sboos?"https://m.sparke.cn/_nuxt/img/1cc3468.png" : "https://m.sparke.cn/_nuxt/img/6ffa01e.png"
                        } alt="" />
                        <p>书城</p>
                    </li>
                    </Link>
                    <Link to="/My">
                    <li
                         onClick = {
                             () => {
                                 this.setState({
                                     ssrc: false,
                                     sboos: false,
                                     smy: true
                                 })
                                 bonn(true);
                             }
                         }
                    >
                        <img
                        src={
                            this.state.smy ? "https://m.sparke.cn/_nuxt/img/c9be02e.png" : "https://m.sparke.cn/_nuxt/img/935abcc.png"
                        } alt="" />
                        <p>我的</p>
                    </li>
                    </Link>
                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.evenEmitter = emitter.addListener("dnno",(bi)=>{
            this.setState({
                bon:false
            })
            console.log(bi)
        });
        console.log(this)
    }
})
