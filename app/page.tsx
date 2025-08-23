import CourseCard from "./component/CourseCard";
import ThreadCard from "./component/ThreadCard";
import ThreadCreateButton from "./component/ThreadCreateButton";
import React from "react";

const page = () => {
  return (
    <div>
      <ThreadCreateButton />
      <ThreadCard />
      <CourseCard />
    </div>
  );
};

export default page;
