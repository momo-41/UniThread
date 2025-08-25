import "server-only";
import { cookies } from "next/headers";

export async function getCourseData(
  facultySlug: string,
  departmentSlug: string
) {
  const url =
    `${process.env.APP_URL!}/api/courses?` +
    `facultySlug=${encodeURIComponent(facultySlug)}` +
    `&departmentSlug=${encodeURIComponent(departmentSlug)}`;

  const cookieHeader = (await cookies()).toString();

  const response = await fetch(url, {
    cache: "no-store",
    headers: { cookie: cookieHeader },
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Failed to fetch courses: ${response.status} ${text}`);
  }

  return response.json();
}
