export default function ResultsScreen({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  const message =
    percentage === 100
      ? "Mandou muito bem! Você domina esses conceitos."
      : percentage >= 60
        ? "Bom trabalho! Continue praticando para fixar ainda mais."
        : "Cada tentativa é aprendizado. Que tal revisar e tentar de novo?";

  return (
    <section className="results-card" aria-labelledby="results-title">
      <div className="results-icon" aria-hidden="true">
        {percentage >= 60 ? "✦" : "↗"}
      </div>
      <span className="eyebrow">QUIZ CONCLUÍDO</span>
      <h1 id="results-title">Você chegou ao final!</h1>
      <p className="results-message">{message}</p>
      <div className="score-panel">
        <span className="score-number">{score}<span>/{total}</span></span>
        <span className="score-caption">respostas corretas</span>
        <div className="score-track" aria-hidden="true">
          <span style={{ width: `${percentage}%` }} />
        </div>
        <span className="score-percent">{percentage}% de aproveitamento</span>
      </div>
      <button className="primary-button restart-button" type="button" onClick={onRestart}>
        Fazer o quiz novamente <span aria-hidden="true">↻</span>
      </button>
    </section>
  );
}
