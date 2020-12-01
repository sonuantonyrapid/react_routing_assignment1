import React, { Component } from 'react';

import { withRouter } from "react-router";

class Course extends Component {

    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourseId:null,
        selectedContent:null

    }

    doUpdate = () =>{

        const updateSelectedCourseId = this.props.match.params.id;

        let updateSelectedContent = null;

        for(const[key,value] of Object.entries(this.state.courses)){

            if(value.id == this.props.match.params.id){

                updateSelectedContent = {...value};

            }

            
        }

        this.setState({selectedCourseId:updateSelectedCourseId,selectedContent:updateSelectedContent});

        


    }

    componentDidMount(){
        if(!this.state.selectedCourseId && !this.state.selectedContent){

            this.doUpdate();


        }
    }

    componentDidUpdate(){

        if(this.state.selectedCourseId && this.state.selectedContent && this.state.selectedCourseId != this.props.match.params.id){

            this.doUpdate();


        }

    }

    render () {
        console.log(this.state);
        return (
            <div>
                <h1>{(this.state.selectedContent)?this.state.selectedContent.title:null}</h1>
        <p>You selected the Course with ID: {this.state.selectedCourseId}</p>
            </div>
        );
    }
}

export default withRouter(Course);