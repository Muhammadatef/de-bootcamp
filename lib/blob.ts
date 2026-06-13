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
 * Uploads the CV to Vercel Blob when BLOB_READ_WRITE_TOKEN is configured.
 * Otherwise (local dev) it writes the file to the OS temp directory and logs
 * the path, returning a null URL. Either way the buffer is returned so it can
 * be attached to the notification email.
 */
export async function storeCv(file: File, applicantName: string): Promise<StoredCv> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const safeName = applicantName.replace(/\s+/g, "-").toLowerCase();
  const ext = file.name.split(".").pop() || "pdf";
  const filename = `cv-${safeName}-${Date.now()}.${ext}`;

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(`cvs/${filename}`, buffer, {
      access: "public",
      contentType: file.type || "application/octet-stream",
    });
    return { url: blob.url, buffer, filename: file.name || filename };
  }

  // Local-dev fallback.
  const tmpPath = join(tmpdir(), filename);
  await writeFile(tmpPath, buffer);
  console.warn(`[blob] BLOB_READ_WRITE_TOKEN not set — CV saved locally to ${tmpPath}`);
  return { url: null, buffer, filename: file.name || filename };
}
