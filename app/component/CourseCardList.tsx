import { Typography, Grid } from "@mui/material";
import CourseCard from "@/app/component/CourseCard";

type Course = { id: string; courseName: string; courseSlug: string | null };

type CourseCardListProps = {
  departmentName: string;
  courses: Course[];
  facultySlug: string;
  departmentSlug: string;
};

const CourseCardList = ({
  departmentName,
  courses,
  facultySlug,
  departmentSlug,
}: CourseCardListProps) => {
  const isEmpty = !courses || courses.length === 0;

  return (
    <>
      <Typography
        fontWeight={550}
        fontSize={20}
        color="#383838"
        ml={3}
        my={1}
        sx={{ mb: 2 }}
      >
        {departmentName}の講義一覧
      </Typography>

      {isEmpty ? (
        <Typography variant="body2" color="text.secondary">
          講義が見つかりませんでした。
        </Typography>
      ) : (
        <Grid container spacing={4} mx={8}>
          {courses.map((course) => (
            <Grid
              size={4}
              key={course.id}
              display={"flex"}
              justifyContent={"center"}
            >
              <CourseCard
                courseName={course.courseName}
                facultySlug={facultySlug}
                departmentSlug={departmentSlug}
                courseId={course.id}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default CourseCardList;
