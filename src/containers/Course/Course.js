import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseId: 999,
        courseTitle: 'No name provided'
    }

    componentDidMount () {
        this.checkForNewCourse();
    }

    componentDidUpdate () {
        this.checkForNewCourse();
    }
    
    checkForNewCourse = () => {
        if (this.props.location.id && this.props.location.id !== this.state.courseId) {
            this.setState({courseId: this.props.location.id, courseTitle: this.props.location.title})
        }
    }

    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.state.courseId}</p>
            </div>
        );
    }
}

export default Course;