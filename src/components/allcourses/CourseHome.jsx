import React from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import './courses.css'

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses'/>
      <CoursesCard/>
    </>
  );
};

export default CourseHome;