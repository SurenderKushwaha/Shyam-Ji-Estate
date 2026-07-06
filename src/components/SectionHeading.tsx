export function SectionHeading({ first, accent }: { first: string; accent: string }) {
  return (
    <div className="text-center">
      <h2 className="section-title">
        {first} <span className="text-accent">{accent}</span>
      </h2>
      <div className="mx-auto mt-2 flex items-center justify-center gap-2 text-accent">
        <span className="h-px w-10 bg-accent/60" />
        <span>◆</span>
        <span className="h-px w-10 bg-accent/60" />
      </div>
    </div>
  );
}
