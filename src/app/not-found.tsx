import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs tracking-[0.35em] text-muted uppercase">
        demalamutria
      </p>
      <h1 className="mt-4 text-4xl font-light">Not found</h1>
      <p className="mt-4 max-w-md text-muted">
        This swatch could not be found in the archive.
      </p>
      <Link
        href="/archive"
        className="mt-8 text-sm tracking-widest uppercase underline-offset-4 transition-opacity duration-300 hover:opacity-60 hover:underline"
      >
        Return to Archive
      </Link>
    </div>
  );
}
