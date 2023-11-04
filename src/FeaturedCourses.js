import React from 'react';
import Course from './Course';
import './FeaturedCourses.css'; // Create this file if it doesn't exist

function FeaturedCourses() {
  const courses = [
    { title: 'YKS', instructor: 'Instructor A', duration: 10 },
    { title: 'ALES', instructor: 'Instructor B', duration: 8 },
  ];

  return (
    <section className="featured-courses">
      {courses.map((course, index) => (
        <Course
          key={index}
          title={course.title}
          instructor={course.instructor}
          duration={course.duration}
        />
      ))}
    </section>
  );
}

export default FeaturedCourses;
