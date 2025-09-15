import { generateReactHelpers } from "@uploadthing/react";
import { genUploader } from "uploadthing/client";
import type { UploadRouter } from "../server/uploadthing";

export const { uploadFiles } = genUploader<UploadRouter>({
  url: "/api/uploadthing",
});

export const { UploadButton, UploadDropzone } = generateReactHelpers<UploadRouter>({
  url: "/api/uploadthing",
});

// Helper function for direct photo uploads
export async function uploadGuestbookPhoto(file: File): Promise<string> {
  try {
    const [response] = await uploadFiles("guestbookImage", {
      files: [file],
    });

    if (!response || !response.url) {
      throw new Error("Upload failed - no URL returned");
    }

    return response.url;
  } catch (error) {
    console.error("Failed to upload photo:", error);
    throw error;
  }
}