// @flow strict

function SectionHeading({ index, eyebrow, title }) {
  return (
    <div className="mb-6 md:mb-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {index} · {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeading;
