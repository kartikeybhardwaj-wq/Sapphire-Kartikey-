import { useState } from "react";
import { CheckCircle, XCircle, AlertTriangle, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/ContentCard";
import { cn } from "@/lib/utils";

interface QuizQuestion {
  id: string;
  question: string;
  example: string;
  correctAnswer: "major" | "minor";
  explanation: string;
}

const questions: QuizQuestion[] = [
  {
    id: "1",
    question: "What type of error is this?",
    example: "Rubric can't distinguish between passing and failing outputs — all models score similarly regardless of actual quality",
    correctAnswer: "major",
    explanation: "This is a Major Error. If a rubric cannot distinguish quality, it fundamentally breaks the evaluation system and makes the rubric unusable.",
  },
  {
    id: "2",
    question: "What type of error is this?",
    example: "Criteria could be more precisely worded but annotators understand intent",
    correctAnswer: "minor",
    explanation: "This is a Minor Error. While clarity could be improved, the criterion is still usable and evaluators can apply it consistently.",
  },
  {
    id: "3",
    question: "What type of error is this?",
    example: "Missing criteria for deal-breaking methodology violations that would cause client embarrassment",
    correctAnswer: "major",
    explanation: "This is a Major Error. Missing critical criteria means the rubric fails to catch errors that would be unacceptable on a live deal.",
  },
  {
    id: "4",
    question: "What type of error is this?",
    example: "Weight distribution slightly suboptimal but still directionally correct",
    correctAnswer: "minor",
    explanation: "This is a Minor Error. While weights could be fine-tuned, major errors are still weighted appropriately, so the rubric remains functional.",
  },
  {
    id: "5",
    question: "What type of error is this?",
    example: "Criteria contradict each other, making standards impossible to meet simultaneously",
    correctAnswer: "major",
    explanation: "This is a Major Error. Coherence failures make the rubric fundamentally broken — if criteria contradict, the rubric cannot be applied.",
  },
  {
    id: "6",
    question: "What type of error is this?",
    example: "Some redundancy between criteria that doesn't affect scoring",
    correctAnswer: "minor",
    explanation: "This is a Minor Error. While redundancy isn't ideal, it doesn't break the rubric's ability to evaluate quality effectively.",
  },
];

export const MajorMinorQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<"major" | "minor" | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswer = (answer: "major" | "minor") => {
    if (selectedAnswer !== null) return; // Prevent re-selection
    
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    const isCorrect = answer === currentQuestion.correctAnswer;
    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Reset quiz
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setScore({ correct: 0, total: 0 });
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  return (
    <ContentCard className="border-2 border-primary/30">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-2">
              Major vs. Minor Errors Quiz
            </h3>
            <p className="text-sm text-muted-foreground">
              Test your understanding of what constitutes a major vs. minor rubric error.
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Question</div>
            <div className="text-lg font-bold text-foreground">
              {currentQuestionIndex + 1} / {questions.length}
            </div>
            {score.total > 0 && (
              <div className="text-xs text-muted-foreground mt-1">
                Score: {score.correct}/{score.total}
              </div>
            )}
          </div>
        </div>

        <div className="p-6 rounded-lg bg-muted/50 border border-border">
          <div className="mb-4">
            <p className="text-sm font-medium text-foreground mb-2">
              {currentQuestion.question}
            </p>
            <div className="p-4 rounded-lg bg-background border border-border">
              <p className="text-sm text-muted-foreground italic">"{currentQuestion.example}"</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => handleAnswer("major")}
              disabled={selectedAnswer !== null}
              className={cn(
                "p-4 rounded-lg border-2 text-left transition-all",
                selectedAnswer === "major"
                  ? currentQuestion.correctAnswer === "major"
                    ? "border-chart-1 bg-chart-1/10"
                    : "border-destructive bg-destructive/10"
                  : selectedAnswer === null
                  ? "border-border hover:border-primary/50 hover:bg-primary/5"
                  : "border-border opacity-50",
                selectedAnswer !== null && currentQuestion.correctAnswer === "major" && selectedAnswer !== "major"
                  ? "border-chart-1 bg-chart-1/10"
                  : ""
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span className="font-semibold text-foreground">Major Error</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Fundamentally broken — cannot be used
              </p>
              {selectedAnswer === "major" && (
                <div className="mt-2">
                  {currentQuestion.correctAnswer === "major" ? (
                    <CheckCircle className="h-5 w-5 text-chart-1" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                </div>
              )}
            </button>

            <button
              onClick={() => handleAnswer("minor")}
              disabled={selectedAnswer !== null}
              className={cn(
                "p-4 rounded-lg border-2 text-left transition-all",
                selectedAnswer === "minor"
                  ? currentQuestion.correctAnswer === "minor"
                    ? "border-chart-1 bg-chart-1/10"
                    : "border-destructive bg-destructive/10"
                  : selectedAnswer === null
                  ? "border-border hover:border-primary/50 hover:bg-primary/5"
                  : "border-border opacity-50",
                selectedAnswer !== null && currentQuestion.correctAnswer === "minor" && selectedAnswer !== "minor"
                  ? "border-chart-1 bg-chart-1/10"
                  : ""
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <Edit3 className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                <span className="font-semibold text-foreground">Minor Error</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Needs improvement but usable
              </p>
              {selectedAnswer === "minor" && (
                <div className="mt-2">
                  {currentQuestion.correctAnswer === "minor" ? (
                    <CheckCircle className="h-5 w-5 text-chart-1" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                </div>
              )}
            </button>
          </div>

          {showExplanation && (
            <div
              className={cn(
                "p-4 rounded-lg border mb-4",
                currentQuestion.correctAnswer === selectedAnswer
                  ? "bg-chart-1/10 border-chart-1/30"
                  : "bg-destructive/10 border-destructive/30"
              )}
            >
              <div className="flex items-start gap-2">
                {currentQuestion.correctAnswer === selectedAnswer ? (
                  <CheckCircle className="h-5 w-5 text-chart-1 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-medium text-foreground mb-1">
                    {currentQuestion.correctAnswer === selectedAnswer
                      ? "Correct!"
                      : `Incorrect. The correct answer is ${currentQuestion.correctAnswer === "major" ? "Major" : "Minor"}.`}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {showExplanation && (
            <Button
              onClick={handleNext}
              className="w-full"
              variant={isLastQuestion ? "default" : "outline"}
            >
              {isLastQuestion ? "Restart Quiz" : "Next Question"}
            </Button>
          )}
        </div>
      </div>
    </ContentCard>
  );
};
