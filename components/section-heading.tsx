type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="section-label">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-50 md:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300/78 md:text-lg">{description}</p>
    </div>
  );
}

