export default function ProjectArtPlaceholder({ title, compact = false }: { title: string; compact?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center bg-surface bg-[radial-gradient(circle_at_30%_20%,#e3b64b1f,transparent_60%)]"
    >
      <span className={`font-display text-foreground/80 ${compact ? 'text-4xl' : 'text-5xl sm:text-6xl'}`}>
        {compact ? title.charAt(0) : title}
      </span>
    </div>
  )
}
