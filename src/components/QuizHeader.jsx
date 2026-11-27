export default function QuizHeader({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <header className="quiz-header">
      <a className="brand" href="/" aria-label="Quiz de JavaScript, início">
        <span className="brand-mark" aria-hidden="true">
          {"{ }"}
        </span>
        <span>DSA<span className="brand-year"> / 2026</span></span>
      </a>
      <div className="header-progress" aria-label={`Questão ${current} de ${total}`}>
        <span className="header-progress-label">
          <span>SEU PROGRESSO</span>
          <span>{current} <span className="muted">/ {total}</span></span>
        </span>
        <span
          className="header-progress-track"
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-label="Progresso do quiz"
        >
          <span style={{ width: `${progress}%` }} />
        </span>
      </div>
    </header>
  );
}
