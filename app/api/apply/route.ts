import { NextRequest, NextResponse } from "next/server";
import { applicationSchema } from "@/lib/validations/application";
import { sendApplicationEmails } from "@/lib/mailer";
import { storeCv } from "@/lib/blob";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fields = {
      fullName: (formData.get("fullName") as string) ?? "",
      email: (formData.get("email") as string) ?? "",
      phone: (formData.get("phone") as string) ?? "",
      city: (formData.get("city") as string) ?? "",
      status: (formData.get("status") as string) ?? "",
      pythonLevel: (formData.get("pythonLevel") as string) ?? "",
      sqlLevel: (formData.get("sqlLevel") as string) ?? "",
      linuxLevel: (formData.get("linuxLevel") as string) ?? "",
      motivation: (formData.get("motivation") as string) ?? "",
      goal: (formData.get("goal") as string) ?? "",
      linkedin: (formData.get("linkedin") as string) ?? "",
      github: (formData.get("github") as string) ?? "",
      commitment: formData.get("commitment") === "true",
    };

    const cvFile = formData.get("cv") as File | null;

    const validation = applicationSchema.safeParse(fields);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.errors },
        { status: 400 }
      );
    }

    const { commitment: _commitment, ...data } = validation.data;

    let cv: { filename: string; content: Buffer } | null = null;
    let cvUrl: string | null = null;
    if (cvFile && cvFile.size > 0) {
      const stored = await storeCv(cvFile, data.fullName);
      cv = { filename: stored.filename, content: stored.buffer };
      cvUrl = stored.url;
    }

    await sendApplicationEmails({ data, cv, cvUrl });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
