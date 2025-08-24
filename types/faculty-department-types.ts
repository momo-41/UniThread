export type FacultyDepartmentDataType = {
  facultyName: string;
  facultySlug: string;
  departments: FacultyDepartmentType[];
};

export type FacultyDepartmentType = {
  departmentName: string;
  departmentSlug: string;
};

export type DepartmentsCardListProps = {
  facultySlug: string;
};

export type FacultiesDataType = {
  facultyName: string;
  facultySlug: string;
};

export type FacultyDepartmentCardProps = {
  facultyName: string;
  facultySlug: string;
  departmentSlug?: string;
};
