"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, FileCheck2, X } from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPT = {
  "application/pdf": [".pdf"],
  "application/msword": [".doc"],
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
};

interface FileUploadProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
  prompt: string;
  hint: string;
  changeLabel: string;
  onRejected?: (message: string) => void;
}

export function FileUpload({
  file,
  onFileChange,
  prompt,
  hint,
  changeLabel,
  onRejected,
}: FileUploadProps) {
  const onDrop = useCallback(
    (accepted: File[]) => {
      if (accepted[0]) onFileChange(accepted[0]);
    },
    [onFileChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ACCEPT,
    maxSize: MAX_SIZE,
    multiple: false,
    onDropRejected: (rejections) => {
      const code = rejections[0]?.errors[0]?.code;
      const msg =
        code === "file-too-large"
          ? "File is too large (max 5MB)."
          : "Unsupported file type. Use PDF, DOC, or DOCX.";
      onRejected?.(msg);
    },
  });

  if (file) {
    return (
      <div className="flex items-center justify-between rounded-xl border border-cyan/30 bg-cyan/5 px-4 py-3.5">
        <div className="flex min-w-0 items-center gap-3">
          <FileCheck2 className="h-5 w-5 shrink-0 text-cyan" />
          <div className="min-w-0">
            <p className="truncate text-sm text-text-primary">{file.name}</p>
            <p className="text-xs text-text-muted">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <span className="cursor-pointer text-xs text-text-secondary hover:text-cyan">
              {changeLabel}
            </span>
          </div>
          <button
            type="button"
            aria-label="Remove file"
            onClick={() => onFileChange(null)}
            className="text-text-muted hover:text-red"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors",
        isDragActive ? "border-cyan bg-cyan/5" : "border-border bg-bg-elevated hover:border-cyan/40"
      )}
    >
      <input {...getInputProps()} />
      <UploadCloud className="h-7 w-7 text-text-muted" />
      <p className="text-sm text-text-secondary">{prompt}</p>
      <p className="font-mono text-xs text-text-muted">{hint}</p>
    </div>
  );
}
