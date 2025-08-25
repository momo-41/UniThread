import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismaClient";

export const runtime = "nodejs";
// export const dynamic = "force-dynamic";
// 常に最新DBを返したい、ユーザーごとのCookie/権限で結果が変わる、静的化/ISRにしたくないときに上記のコメントアウトを解除する

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const facultySlug = searchParams.get("facultySlug");
  const departmentSlug = searchParams.get("departmentSlug");

  if (!facultySlug || !departmentSlug) {
    return NextResponse.json(
      { error: "facultySlug and departmentSlug are required" },
      { status: 400 }
    );
  }

  try {
    const courses = await prisma.course.findMany({
      where: { facultySlug, departmentSlug },
      select: {
        id: true,
        courseName: true,
        courseSlug: true,
      },
      orderBy: { courseName: "asc" },
    });

    if (!courses || courses.length === 0) {
      console.log("[/api/courses] no courses found for", {
        facultySlug,
        departmentSlug,
      });
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(courses, { status: 200 });
  } catch (e) {
    console.error("[/api/courses] ERROR", e);
    return NextResponse.json({ error: "INTERNAL" }, { status: 500 });
  }
}
