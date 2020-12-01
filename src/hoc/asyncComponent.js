import React, { Component } from 'react';

const asyncComponent = (importWrapper) => {

    return(
        class extends Component{
            state={
                component:null
            }

            componentDidMount(){

                importWrapper().then((cmp)=>{

                    this.setState({component:cmp.default});
                    
                console.log(cmp.default);

                });

            }

            render(){

                const SetComponent = this.state.component;

                if(SetComponent){

                    return <SetComponent {...this.props}/>;

                }

                return <h1>Not Found</h1>;

            }
        }
    );

}

export default asyncComponent;