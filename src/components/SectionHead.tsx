export function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <header>
      <p data-reveal className="mb-4 text-xs uppercase tracking-[0.18em] text-accent">
        {index} / {label}
      </p>
      <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02]">
        <span className="line-mask">
          <span data-line>{title}</span>
        </span>
      </h2>
    </header>
  )
}
