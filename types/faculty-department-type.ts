export type FacultyDepartmentDataType = {
  facultyName: string;
  facultySlug: string;
  departments: DepartmentDataType[];
};

export type DepartmentDataType = {
  departmentName: string;
  departmentSlug: string;
};

export type FacultyDepartmentCardProps = {
  name: string;
  facultySlug: string;
  departmentSlug?: string;
};

export type DepartmentsCardListProps = { facultySlug: string };
