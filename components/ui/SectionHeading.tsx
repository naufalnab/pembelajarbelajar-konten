type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ id, eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
