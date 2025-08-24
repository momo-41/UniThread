import { FacultyDepartmentDataType } from "@/types/faculty-department-types";

export const FacultyDepartmentsData: FacultyDepartmentDataType[] = [
  {
    facultyName: "文学部",
    facultySlug: "literature",
    departments: [
      {
        departmentName: "英語英米文学科",
        departmentSlug: "english-and-american-literature",
      },
      { departmentName: "日本文学科", departmentSlug: "japanese-literature" },
      {
        departmentName: "国際文化学科",
        departmentSlug: "international-culture",
      },
      {
        departmentName: "現代社会学科",
        departmentSlug: "contemporary-sociology",
      },
    ],
  },
  {
    facultyName: "法学部",
    facultySlug: "law",
    departments: [
      { departmentName: "法律学科", departmentSlug: "law" },
      { departmentName: "政治学科", departmentSlug: "political-science" },
    ],
  },
  {
    facultyName: "経営学部",
    facultySlug: "business",
    departments: [
      {
        departmentName: "総合経営学科",
        departmentSlug: "business-administration",
      },
    ],
  },
  {
    facultyName: "経済学部",
    facultySlug: "economics",
    departments: [
      {
        departmentName: "経済数理学科",
        departmentSlug: "economic-mathematical-science",
      },
      {
        departmentName: "現代経済学科",
        departmentSlug: "contemporary-economics",
      },
    ],
  },
  {
    facultyName: "理工学部",
    facultySlug: "science-and-engineering",
    departments: [
      {
        departmentName: "データ数理",
        departmentSlug: "data-science",
      },
      {
        departmentName: "コンピュータ科学",
        departmentSlug: "computer-science",
      },
      {
        departmentName: "機械システム",
        departmentSlug: "mechanical-systems",
      },
      {
        departmentName: "電気電子",
        departmentSlug: "electrical-and-electronic",
      },
      { departmentName: "応用化学", departmentSlug: "applied-chemistry" },
    ],
  },
];
