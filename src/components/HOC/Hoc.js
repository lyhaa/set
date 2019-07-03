import React from 'react';

export default (HocComponent)=>{
    return class Hoc extends React.Component{
        state = {
            skill:['Ni','jk','jn']
        }
        axiox(){
           return this.props
        }
        render(){
            return(
                <HocComponent hoc={{
                    ...this.state.skill
                }} axiox = {this.axiox} tab={this.props.tab} ></HocComponent>
            )
        }
        // componentDidMount(){
        //     console.log('dsfs')
        // }
    }
}