import React from 'react';
import './Course.css';

function Course(props) {
  return (
    <div className="course-card">
      <div className="course-title">{props.title}</div>
      <div className="course-info">
        <div>Instructor: {props.instructor}</div>
        <div>Duration: {props.duration} hours</div>
        <button className="btn-primary">Go to Course</button>
      </div>
    </div>
  );
}

export default Course;
