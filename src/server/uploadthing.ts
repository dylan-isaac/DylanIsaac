import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const uploadRouter = {
  guestbookImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
      acceptedFileTypes: ["image/jpeg", "image/png", "image/webp"],
    },
  })
    .middleware(async () => {
      // Add metadata for the upload
      return {
        timestamp: Date.now(),
        event: "disability-innovation-forum-2025",
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Guestbook photo uploaded:", file.url);
      console.log("Upload metadata:", metadata);

      return {
        url: file.url,
        uploadedAt: metadata.timestamp,
      };
    }),
} satisfies FileRouter;

export type UploadRouter = typeof uploadRouter;