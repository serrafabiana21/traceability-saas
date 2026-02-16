import { useRef, useState } from 'react';

export default function UploadArea() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = (files) => {
    const accepted = Array.from(files).filter((file) =>
      ['application/pdf', 'image/png', 'image/jpeg', 'image/webp'].includes(file.type)
    );

    if (accepted.length) {
      setUploadedFiles((prev) => [...accepted, ...prev]);
    }
  };

  const onDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    handleFiles(event.dataTransfer.files);
  };

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm" id="documents">
      <h2 className="text-lg font-semibold text-slate-900">Upload Documentation</h2>
      <p className="mt-1 text-sm text-slate-500">Drag and drop PDF or image files here.</p>
      <div
        className={`mt-4 flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition ${
          isDragging ? 'border-accent bg-accent-soft' : 'border-slate-300 bg-slate-50'
        }`}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
      >
        <p className="text-base font-medium text-slate-700">Drop files to upload</p>
        <p className="mt-2 text-sm text-slate-500">or click to browse your device</p>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          multiple
          accept="application/pdf,image/png,image/jpeg,image/webp"
          onChange={(event) => handleFiles(event.target.files)}
        />
      </div>

      {uploadedFiles.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {uploadedFiles.slice(0, 4).map((file) => (
            <li key={`${file.name}-${file.lastModified}`} className="rounded-md bg-slate-50 px-3 py-2">
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
