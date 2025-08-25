import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prismaClient";

export const runtime = "nodejs";

const Body = z.object({
  title: z
    .string()
    .min(1, "タイトルは必須です。")
    .max(30, "タイトルは30文字以内で指定してください。"),
  courseId: z.string().uuid("courseIdはUUIDで指定してください。"),
});

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const json = await req.json();
    const { title, courseId } = Body.parse(json);
    const [profile, course] = await Promise.all([
      prisma.profile.findUnique({
        where: { clerkUserId: userId },
        select: { id: true },
      }),
      prisma.course.findUnique({
        where: { id: courseId },
        select: { id: true },
      }),
    ]);
    if (!profile) {
      return NextResponse.json(
        { message: "Profile not found for current user." },
        { status: 401 }
      );
    }
    if (!course) {
      return NextResponse.json(
        { message: "Course not found." },
        { status: 404 }
      );
    }
    const thread = await prisma.thread.create({
      data: {
        title,
        courseId,
        createdBy: profile.id,
      },
      select: { id: true, title: true, courseId: true, createdAt: true },
    });
    return new NextResponse(JSON.stringify(thread), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { message: "Invalid body", issues: err.issues },
        { status: 400 }
      );
    }
    console.error("POST /api/thread error:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
