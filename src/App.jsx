import { useEffect, useState } from "react";
import QuizHeader from "./components/QuizHeader.jsx";
import QuestionCard from "./components/QuestionCard.jsx";
import ResultsScreen from "./components/ResultsScreen.jsx";
import { questions } from "./questions.js";

const STORAGE_KEY = "dsa-2026-quiz-progress";

function readProgress() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;

    const progress = JSON.parse(saved);
    const validIndex =
      Number.isInteger(progress.index) &&
      progress.index >= 0 &&
      progress.index < questions.length;
    const validScore =
      Number.isInteger(progress.score) &&
      progress.score >= 0 &&
      progress.score <= questions.length;
    const validSelection =
      progress.selectedOption === null ||
      (Number.isInteger(progress.selectedOption) &&
        progress.selectedOption >= 0 &&
        progress.selectedOption < questions[progress.index]?.options.length);

    if (
      !validIndex ||
      !validScore ||
      !validSelection ||
      typeof progress.answered !== "boolean" ||
      typeof progress.complete !== "boolean" ||
      (progress.answered && progress.selectedOption === null) ||
      (progress.complete && !progress.answered)
    ) {
      return null;
    }

    return {
      index: progress.index,
      score: progress.score,
      selectedOption: progress.selectedOption,
      answered: progress.answered,
      complete: progress.complete,
    };
  } catch {
    return null;
  }
}

const initialProgress = {
  index: 0,
  score: 0,
  selectedOption: null,
  answered: false,
  complete: false,
};

export default function App() {
  const [progress, setProgress] = useState(() => readProgress() ?? initialProgress);
  const [storageError, setStorageError] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }, [progress]);

  function selectAnswer(optionIndex) {
    if (progress.answered) return;

    const isCorrect = optionIndex === questions[progress.index].answer;
    setProgress((current) => ({
      ...current,
      selectedOption: optionIndex,
      answered: true,
      score: current.score + (isCorrect ? 1 : 0),
    }));
  }

  function continueQuiz() {
    if (!progress.answered) return;

    if (progress.index === questions.length - 1) {
      setProgress((current) => ({ ...current, complete: true }));
      return;
    }

    setProgress((current) => ({
      ...current,
      index: current.index + 1,
      selectedOption: null,
      answered: false,
    }));
  }

  function restartQuiz() {
    setProgress(initialProgress);
  }

  const currentQuestion = questions[progress.index];

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="page-content">
        <QuizHeader
          current={progress.complete ? questions.length : progress.index + 1}
          total={questions.length}
        />
        <div className="intro">
          <span className="eyebrow"><span className="eyebrow-dot" /> APRENDER FAZENDO</span>
          <p>Seu próximo passo em JavaScript começa aqui.</p>
        </div>

        {progress.complete ? (
          <ResultsScreen
            score={progress.score}
            total={questions.length}
            onRestart={restartQuiz}
          />
        ) : (
          <QuestionCard
            question={currentQuestion}
            questionNumber={progress.index + 1}
            selectedOption={progress.selectedOption}
            answered={progress.answered}
            onSelect={selectAnswer}
            onContinue={continueQuiz}
          />
        )}

        {storageError && (
          <p className="storage-notice" role="status">
            Não foi possível salvar seu progresso neste navegador.
          </p>
        )}
        <footer className="page-footer">
          <span>REVISÃO DE JAVASCRIPT</span>
          <span>Uma questão de cada vez <span aria-hidden="true">·</span> No seu ritmo</span>
        </footer>
      </div>
    </main>
  );
}
