import DepartmentsCardList from "@/app/component/DepartmentsCardList";
import FacultyCardList from "@/app/component/FacultyCardList";
import React from "react";
type TProps = {
  params: { facultySlug: string };
};

const facultyPage = ({ params }: TProps) => {
  const facultySlug = params.facultySlug;
  console.log("[facultyName]", params.facultySlug);
  return (
    <div>
      <FacultyCardList />
      <DepartmentsCardList facultySlug={facultySlug} />
    </div>
  );
};

export default facultyPage;
