import DepartmentsCardList from "@/app/component/DepartmentsCardList";
import FacultyCardList from "@/app/component/FacultyCardList";
import SearchBox from "@/app/component/SearchBox";

type TParams = { facultySlug: string };

const FacultyPage = async ({ params }: { params: TParams }) => {
  const { facultySlug } = params;

  return (
    <div>
      <SearchBox />
      <FacultyCardList />
      <DepartmentsCardList facultySlug={facultySlug} />
    </div>
  );
};

export default FacultyPage;
