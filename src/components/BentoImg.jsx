export default function BentoImg({ src, alt, hint, className = '' }) {
  return (
    <div className={`bento-wrap ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={e => e.currentTarget.classList.add('bento-img--gone')}
      />
      <div className="bento-ph" aria-hidden="true">
        <code className="bento-ph__src">{src}</code>
        <p className="bento-ph__hint">{hint}</p>
      </div>
    </div>
  )
}
