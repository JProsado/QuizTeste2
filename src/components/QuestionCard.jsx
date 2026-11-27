export default function QuestionCard({
  question,
  questionNumber,
  selectedOption,
  answered,
  onSelect,
  onContinue,
}) {
  return (
    <section className="question-card" aria-labelledby="question-title">
      <div className="question-meta">
        <span className="topic-pill">{question.topic}</span>
        <span className="question-number">
          QUESTÃO <strong>{String(questionNumber).padStart(2, "0")}</strong>
        </span>
      </div>

      <h1 id="question-title">{question.prompt}</h1>

      {question.code && (
        <pre className="code-sample">
          <code>{question.code}</code>
        </pre>
      )}

      <div className="options-list" role="group" aria-label="Alternativas">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = question.answer === index;
          let stateClass = "";

          if (answered && isCorrect) stateClass = " option-correct";
          else if (answered && isSelected) stateClass = " option-incorrect";
          else if (isSelected) stateClass = " option-selected";

          return (
            <button
              className={`option-button${stateClass}`}
              key={option}
              type="button"
              onClick={() => onSelect(index)}
              disabled={answered}
              aria-pressed={isSelected}
            >
              <span className="option-letter">{String.fromCharCode(65 + index)}</span>
              <span>{option}</span>
              {answered && isCorrect && <span className="option-result">Correta</span>}
              {answered && isSelected && !isCorrect && (
                <span className="option-result">Sua resposta</span>
              )}
            </button>
          );
        })}
      </div>

      {answered ? (
        <div
          className={`answer-feedback ${
            selectedOption === question.answer ? "feedback-correct" : "feedback-incorrect"
          }`}
          role="status"
        >
          <strong>
            {selectedOption === question.answer ? "Muito bem!" : "Quase! Vamos aprender."}
          </strong>
          <p>{question.explanation}</p>
        </div>
      ) : (
        <p className="answer-hint">Escolha uma alternativa para conferir sua resposta.</p>
      )}

      <button
        className="primary-button"
        type="button"
        onClick={onContinue}
        disabled={!answered}
      >
        {answered ? "Continuar" : "Selecione uma resposta"}
        {answered && <span aria-hidden="true">→</span>}
      </button>
    </section>
  );
}
