import DepartmentsCardList from "@/app/component/DepartmentsCardList";
import FacultyCardList from "@/app/component/FacultyCardList";
import SearchBox from "@/app/component/SearchBox";

type TParams = { facultySlug: string };

const FacultyPage = async ({ params }: { params: Promise<TParams> }) => {
  const { facultySlug } = await params;

  return (
    <div>
      <SearchBox />
      <FacultyCardList />
      <DepartmentsCardList facultySlug={facultySlug} />
    </div>
  );
};

export default FacultyPage;
