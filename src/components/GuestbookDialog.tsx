import { useState, useRef, useEffect, type FormEvent } from 'react';
import { uploadGuestbookPhoto } from '../utils/uploadthing';

interface GuestbookDialogProps {
  eventSlug: string;
}

export default function GuestbookDialog({ eventSlug }: GuestbookDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleOpenDialog = () => {
      setIsOpen(true);
      dialogRef.current?.showModal();
    };

    window.addEventListener('open-guestbook-dialog', handleOpenDialog);
    return () => window.removeEventListener('open-guestbook-dialog', handleOpenDialog);
  }, []);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (4MB max)
    if (file.size > 4 * 1024 * 1024) {
      alert('Image must be less than 4MB');
      return;
    }

    setPhotoFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload to UploadThing
    try {
      setUploadStatus('uploading');
      const url = await uploadGuestbookPhoto(file);
      setPhotoUrl(url);
      setUploadStatus('success');
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadStatus('error');
      // Fall back to local storage
      setPhotoUrl(photoPreview); // Use data URL as fallback
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      title: formData.get('title') as string,
      message: formData.get('message') as string,
      photoUrl: photoUrl,
      eventSlug: eventSlug,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('/.netlify/functions/guestbook-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Thank you for signing the guestbook! Your entry will appear shortly.');
        handleClose();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    dialogRef.current?.close();
    // Reset form
    setPhotoFile(null);
    setPhotoPreview('');
    setPhotoUrl('');
    setUploadStatus('idle');
  };

  const removePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview('');
    setPhotoUrl('');
    setUploadStatus('idle');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className="p-lg rounded-lg bg-surface dark:bg-dark-surface shadow-xl backdrop:bg-black backdrop:bg-opacity-50 max-w-md w-full"
    >
      <div className="flex justify-between items-start mb-md">
        <h2 className="text-h2 text-primary-dark dark:text-primary-light">
          Sign the Guestbook
        </h2>
        <button
          onClick={handleClose}
          className="text-content-muted dark:text-dark-content-muted hover:text-content dark:hover:text-dark-content"
          aria-label="Close dialog"
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-sm">
        <div>
          <label htmlFor="name" className="block text-small font-medium mb-xs text-content dark:text-dark-content">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full p-xs rounded border border-surface-secondary dark:border-dark-surface-secondary bg-surface dark:bg-dark-surface text-content dark:text-dark-content focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-small font-medium mb-xs text-content dark:text-dark-content">
            Title/Role (optional)
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="w-full p-xs rounded border border-surface-secondary dark:border-dark-surface-secondary bg-surface dark:bg-dark-surface text-content dark:text-dark-content focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g., Accessibility Advocate"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-small font-medium mb-xs text-content dark:text-dark-content">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={3}
            className="w-full p-xs rounded border border-surface-secondary dark:border-dark-surface-secondary bg-surface dark:bg-dark-surface text-content dark:text-dark-content focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Share your thoughts..."
          />
        </div>

        {/* Photo Section */}
        <div className="border-2 border-dashed border-secondary-dark dark:border-secondary-light rounded-lg p-sm">
          <label className="block text-small font-medium mb-xs text-content dark:text-dark-content">
            Photo (optional)
          </label>

          {!photoPreview ? (
            <div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileSelect}
                className="hidden"
                id="photo-input"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-xs px-sm bg-secondary text-white rounded hover:bg-secondary-dark transition-colors"
              >
                📸 Take or Choose Photo
              </button>
            </div>
          ) : (
            <div className="space-y-xs">
              <img
                src={photoPreview}
                alt="Your photo"
                className="w-full rounded max-h-48 object-cover"
              />
              <div className="flex justify-between items-center">
                <span className="text-small text-content-muted dark:text-dark-content-muted">
                  {uploadStatus === 'uploading' && '⏳ Uploading...'}
                  {uploadStatus === 'success' && '✅ Uploaded'}
                  {uploadStatus === 'error' && '❌ Upload failed'}
                </span>
                <button
                  type="button"
                  onClick={removePhoto}
                  className="text-small text-secondary hover:text-secondary-dark"
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-sm pt-sm">
          <button
            type="button"
            onClick={handleClose}
            className="flex-1 py-sm px-md border border-content-muted dark:border-dark-content-muted text-content dark:text-dark-content rounded-lg hover:bg-surface-muted dark:hover:bg-dark-surface-muted transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting || (photoFile && uploadStatus === 'uploading')}
            className="flex-1 py-sm px-md bg-primary-dark dark:bg-primary-light text-white dark:text-content rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Sign Guestbook'}
          </button>
        </div>
      </form>
    </dialog>
  );
}