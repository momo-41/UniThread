import DepartmentsCardList from "@/app/component/DepartmentsCardList";
import FacultyCardList from "@/app/component/FacultyCardList";

type TParams = { facultySlug: string };

const FacultyPage = async ({ params }: { params: Promise<TParams> }) => {
  const { facultySlug } = await params;

  return (
    <div>
      <FacultyCardList />
      <DepartmentsCardList facultySlug={facultySlug} />
    </div>
  );
};

export default FacultyPage;
