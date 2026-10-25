type SectionHeadingProps = { index: string; title: string; id: string };
export function SectionHeading({ index, title, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="number" aria-hidden="true">
        {index}
      </span>
      <h2 id={id}>{title}</h2>
    </div>
  );
}
