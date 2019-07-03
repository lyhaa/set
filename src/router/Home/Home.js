import React from 'react';
import Axios from 'axios';
// import './new.css'
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import {Link} from 'react-router-dom';
import emitter from "../../ev";
// console.log(style);
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inxdata:""
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:7070/server/ser')
        .then((res)=>{
            this.setState({
                inxdata:res
            })
        })
        new Swiper('.swiper-container',{
                centeredSlides: true,
                autoplay:{
                    delay: 2000,
                    disableOnInteraction:false
                },
                loop:true,
                effect:'coverflow',
                pagination: {
                    el:'.swiper-pagination'
                }
        })
    }
    render(){
        // const bonn = (bi)=>{
        //     return ()=>{
        //         emitter.emit("dnno",true)
        //     }
        // }
        // bonn("你好")
        return(
            <div className={"home"}>
            {/* {console.log(this)} */}
                <div className={"htitle"}>
                    <h3>
                        星火英语
                    </h3>
                </div>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="https://ksimg.sparke.cn/images/english/2019/6/746162718431683585.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://ksimg.sparke.cn/images/english/2019/6/740322061125329025.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide">                
                            <img src="https://ksimg.sparke.cn/images/english/2019/6/746162718431683585.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://ksimg.sparke.cn/images/english/2019/6/740322061125329025.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="https://ksimg.sparke.cn/images/english/2019/6/740322061125329025.jpg" alt=""/>
                        </div>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
                <nav>
                    <li>
                        <a href="javascript:;">
                            <div className={"nimg"}><img src={"https://m.sparke.cn/_nuxt/img/ce9ca67.png"} alt=""/></div>
                            <div className={"ntit"}><span>四年级</span></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div  className={"nimg"}><img src={"https://m.sparke.cn/_nuxt/img/0cdd77c.png"} alt=""/></div>
                            <div className={"ntit"}><span>考研英语</span></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div  className={"nimg"}><img src={"https://m.sparke.cn/_nuxt/img/072dc89.png"} alt=""/></div>
                            <div className={"ntit"}><span>专四专八</span></div>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div  className={"nimg"}><img src={"https://m.sparke.cn/_nuxt/img/be7cac9.png"} alt=""/></div>
                            <div className={"ntit"}><span>公开课</span></div>
                        </a>
                    </li>
                </nav>
                <div className={"inxlis"}>
                    <h2>精选课程</h2>
                    {/* {console.log(this)} */}
                    <ul>
                        {
                            this.state.inxdata ? this.state.inxdata.data[0].results.body.netList.map((item,index)=>{
                                // console.log()
                                // console.log(item)
                                return(
                                    // <Link to={"/Details"+"?id="+item.key} key={item.index}>
                                     <li key={item.key} ref={"liiis"} onClick={
                                         (e)=>{
                                             this.props.history.push({pathname:"/Details",key:item.key})
                                            // this.props.tab = item.key;
                                            // console.log(this)
                                         }
                                     }>
                                        <div className={"ndxlis"}>
                                                <div className={"intop"}>
                                                    <div className={"limg"}>
                                                        <img src={item.img} />
                                                    </div>
                                                    <div className={"tit"}>
                                                        <h4>{item.title}</h4>
                                                        <p>{item.liveTime}</p>
                                                        <dl>
                                                            {
                                                                item.teacher.split(",").slice(0,3).map((item,index)=>{
                                                                    return(
                                                                        <dd key={index}>{item}</dd>
                                                                    )
                                                                })
                                                                
                                                            }
                                                        </dl>
                                                    </div>
                                                </div>
                                                <div className={"inbot"}>
                                                    {
                                                        item.limitBuyers?<span className={"population"}>限购{item.limitBuyers}人</span>:""
                                                    }
                                                    <span className={"gou"}>已有{item.buyers}人购买</span>
                                                    {
                                                        item.price?<span className={"pic"}>¥{item.price}</span>:""
                                                    }
                                                    <span className={"newpic"}>{item.disprice==0.00?"免费":"￥"+item.disprice}</span>
                                                </div>
                                        </div>
                                    </li>
                                    // </Link>
                                )
                            }) : ""
                        }
                    </ul>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Home;