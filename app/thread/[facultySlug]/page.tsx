import DepartmentsCardList from "@/app/component/DepartmentsCardList";

type TProps = {
  params: { facultySlug: string };
};

const facultyPage = ({ params }: TProps) => {
  const facultySlug = params.facultySlug;
  console.log("[facultyName]", params.facultySlug);
  return (
    <>
      <DepartmentsCardList facultySlug={facultySlug} />
    </>
  );
};

export default facultyPage;
