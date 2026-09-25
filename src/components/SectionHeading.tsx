type SectionHeadingProps = {
  index: string;
  title: string;
};

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-sans text-xs font-semibold tracking-[0.25em] text-accent">
        {index}
      </span>
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-ink/70">
        {title}
      </h2>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  );
}
