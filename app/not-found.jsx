// @flow strict

import Link from "next/link";

function page() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="font-mono text-6xl font-bold text-accent">404</h1>
      <p className="mt-3 text-lg text-body">Page Not Found</p>
      <p className="mt-1 text-muted">Sorry, the page you are looking for does not exist.</p>
      <Link
        className="mt-6 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
        href="/"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default page;
