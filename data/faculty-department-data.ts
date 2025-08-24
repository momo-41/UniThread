// facultydata(dacultyname,facultyslug,departments(departmentname,departmentslug))
import { FacultyDepartmentDataType } from "@/types/faculties-type";

export const FacultyDepartmentData: FacultyDepartmentDataType[] = [
  {
    facultyName: "文学部",
    facultySlug: "literature",
    departments: [
      {
        departmentName: "英語英米文学科",
        departmentSlug: "english_american_literature",
      },
      { departmentName: "日本文学科", departmentSlug: "japanese_literature" },
      {
        departmentName: "国際文化学科",
        departmentSlug: "international_culture",
      },
      { departmentName: "現代社会学科", departmentSlug: "modern_society" },
    ],
  },
  {
    facultyName: "法学部",
    facultySlug: "law",
    departments: [
      { departmentName: "法律学科", departmentSlug: "law" },
      { departmentName: "政治学科", departmentSlug: "politics" },
    ],
  },
  {
    facultyName: "経営学部",
    facultySlug: "business",
    departments: [
      {
        departmentName: "総合経営学科",
        departmentSlug: "department_of_business_management",
      },
    ],
  },
  {
    facultyName: "経済学部",
    facultySlug: "economics",
    departments: [
      {
        departmentName: "経済数理学科",
        departmentSlug: "economics_mathematics",
      },
      { departmentName: "現代経済学科", departmentSlug: "modern_economics" },
    ],
  },
  {
    facultyName: "理工学部",
    facultySlug: "science_and_engineering",
    departments: [
      { departmentName: "データ数理専攻", departmentSlug: "data_mathematics" },
      {
        departmentName: "コンピュータ科学専攻",
        departmentSlug: "computer_science",
      },
      {
        departmentName: "機械システム専攻",
        departmentSlug: "mechanical_systems",
      },
      {
        departmentName: "電気電子専攻",
        departmentSlug: "electrical_electronics",
      },
      { departmentName: "応用化学専攻", departmentSlug: "applied_chemistry" },
    ],
  },
];
