type SectionHeadingProps = {
  title: string;
  description: string;
  number?: string;
};

export default function SectionHeading({
  title,
  description,
  number,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      {number && <p className="eyebrow mb-4">{number}</p>}
      <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="muted mt-5 max-w-xl text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
