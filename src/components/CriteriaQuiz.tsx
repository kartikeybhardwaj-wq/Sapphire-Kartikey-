import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContentCard } from "@/components/ContentCard";
import { cn } from "@/lib/utils";

interface QuizQuestion {
  id: string;
  question: string;
  example: string;
  options: { label: string; value: string; description?: string }[];
  correctAnswer: string;
  explanation: string;
}

interface CriteriaQuizProps {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export const CriteriaQuiz = ({ title, description, questions }: CriteriaQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    
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
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {description}
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

          <div className="grid gap-3 mb-6">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                disabled={selectedAnswer !== null}
                className={cn(
                  "p-4 rounded-lg border-2 text-left transition-all",
                  selectedAnswer === option.value
                    ? currentQuestion.correctAnswer === option.value
                      ? "border-chart-1 bg-chart-1/10"
                      : "border-destructive bg-destructive/10"
                    : selectedAnswer === null
                    ? "border-border hover:border-primary/50 hover:bg-primary/5"
                    : "border-border opacity-50",
                  selectedAnswer !== null && currentQuestion.correctAnswer === option.value && selectedAnswer !== option.value
                    ? "border-chart-1 bg-chart-1/10"
                    : ""
                )}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-foreground">{option.label}</span>
                    {option.description && (
                      <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                    )}
                  </div>
                  {selectedAnswer === option.value && (
                    <div>
                      {currentQuestion.correctAnswer === option.value ? (
                        <CheckCircle className="h-5 w-5 text-chart-1" />
                      ) : (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                  )}
                  {selectedAnswer !== null && currentQuestion.correctAnswer === option.value && selectedAnswer !== option.value && (
                    <CheckCircle className="h-5 w-5 text-chart-1" />
                  )}
                </div>
              </button>
            ))}
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
                      : "Incorrect."}
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

