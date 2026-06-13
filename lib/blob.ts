import { put } from "@vercel/blob";
import { writeFile } from "fs/promises";
import { tmpdir } from "os";
import { join } from "path";

export interface StoredCv {
  url: string | null;
  buffer: Buffer;
  filename: string;
}

/**
 * Stores the CV and always returns its buffer so it can be attached to the
 * notification email. CV storage is best-effort: if Vercel Blob (or the local
 * fallback) fails, we log and continue with a null URL rather than failing the
 * whole application — losing an applicant over a storage hiccup is unacceptable.
 */
export async function storeCv(file: File, applicantName: string): Promise<StoredCv> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const safeName = applicantName.replace(/\s+/g, "-").toLowerCase();
  const ext = file.name.split(".").pop() || "pdf";
  const filename = `cv-${safeName}-${Date.now()}.${ext}`;
  const displayName = file.name || filename;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const blob = await put(`cvs/${filename}`, buffer, {
        access: "public",
        contentType: file.type || "application/octet-stream",
      });
      return { url: blob.url, buffer, filename: displayName };
    } catch (error) {
      console.error("[blob] Upload to Vercel Blob failed — continuing with email attachment only:", error);
      return { url: null, buffer, filename: displayName };
    }
  }

  // Local-dev fallback (best-effort): write to the OS temp directory.
  try {
    const tmpPath = join(tmpdir(), filename);
    await writeFile(tmpPath, buffer);
    console.warn(`[blob] BLOB_READ_WRITE_TOKEN not set — CV saved locally to ${tmpPath}`);
  } catch (error) {
    console.warn("[blob] Local CV write failed — continuing with email attachment only:", error);
  }
  return { url: null, buffer, filename: displayName };
}
