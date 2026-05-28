export type Question = {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  accent: "indigo" | "fuchsia" | "emerald" | "amber" | "sky";
  questions: Question[];
};

export interface QuizState {
  lessons: Lesson[];
  selectedLessonId: string | null;
  activeQuestionIndex: number;
  userAnswers: Record<number, string>;
  isQuizFinished: boolean;
  isWrongAnswersMode: boolean;
  wrongQuestions: Question[];
  shuffledQuestions: Question[] | null;

  studyMode: "none" | "list" | "reveal";
  studyLessonId: string | null;
  studyQuestionIndex: number;

  selectLesson: (lessonId: string) => void;
  goToLessonSelection: () => void;
  answerQuestion: (questionId: number, answer: string) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  finishQuiz: () => void;
  restartQuiz: () => void;
  retryWrongAnswers: () => void;
  shuffleQuestions: () => void;
  startStudyMode: (lessonId: string, mode: "list" | "reveal") => void;
  exitStudyMode: () => void;
  nextStudyQuestion: () => void;
  prevStudyQuestion: () => void;
}
