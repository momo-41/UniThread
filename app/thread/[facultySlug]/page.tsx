import DepartmentsCardList from "@/app/component/DepartmentsCardList";

type TProps = {
  params: Promise<{ facultySlug: string }>;
};

export default async function FacultyPage({ params }: TProps) {
  const { facultySlug } = await params; // ← ここがポイント
  console.log("[facultyName]", facultySlug);

  return <DepartmentsCardList facultySlug={facultySlug} />;
}
