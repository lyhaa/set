import React from 'react';
import store from '../../store/index';
import reducer from '../../store/reducer';
import Hoc from '../../components/HOC/Hoc';
import Axios from 'axios';

class Details extends React.Component{
    constructor(porps){
        super(porps);
            // this.state={
            //     key: this.props.location.id ? this.props.location.id:""
            // }
            // const action = {
            //     type: 'TOGGLEGALLERY',
            //     key: this.props.location.id ? this.props.location.id : store.getState().key
            // }
            // console.log(store)
            // store.dispatch(action);
            // this.state = store.getState();
            // function dispatch(action){
            //     currentState = reducer(currentState,action);
            // }
            console.log(this.props.tab)
            // this.props? (this.props.tab = this.props.location.id ? this.props.location.id : ""):""
    }
    render(){
        return(
            <div>
                {/* {console.log(this)} */}
                你好
            </div>
        )
    }
    componentDidMount(){
        Axios.get(`https://api2.sparke.cn/netcourse/detail?key=${this.props.tab}&pvalue=%7B%22appId%22:%22210951669544977408%22,%22v%22:%221.0.0%22,%22os%22:%22web%22,%22terminalType%22:%222%22,%22timestamp%22:1561641999175,%22terminalid%22:%229bf132fb-4cfd-417b-b1bb-cbcb77513407%22,%22appSign%22:%22b6f5af347aa112c91a4ea6d2a80d5d7d%22,%22token%22:%22%22,%22userId%22:%22%22%7D`)
        .then((res)=>{
            console.log(res)
        })
    }
}
export default Hoc(Details);