import { creativeProcess } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
export function ProcessSection() {
  return (
    <section
      tabIndex={-1}
      id="process"
      aria-labelledby="process-heading"
      className="section process-section"
    >
      <div className="wrap">
        <SectionHeading
          index="04"
          title="A simple, thoughtful approach."
          id="process-heading"
        />
        <ol className="process-steps">
          {creativeProcess.map((step, index) => (
            <li key={step.title}>
              <span className="process-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
