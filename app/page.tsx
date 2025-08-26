import CourseCard from "./component/CourseCard";
import ThreadCard from "./component/ThreadCard";
import PostButton from "./component/PostButton";
import React from "react";

const page = () => {
  return (
    <div>
      <PostButton text={"＋スレッドを作成"} href={"/thread"} />
      <ThreadCard title={""} authorName={""} createdAt={""} />
      <CourseCard
        courseName={""}
        facultySlug={""}
        departmentSlug={""}
        courseId={""}
      />
    </div>
  );
};

export default page;
