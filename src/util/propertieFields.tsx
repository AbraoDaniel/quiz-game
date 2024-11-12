import HomePage from "../components/HomePage";
import LoseGamePage from "../components/LoseGamePage";
import QuestionPage from "../components/QuestionPage";


export const routePathsAndElements = [
  {path: '/', element: <HomePage />},
  {path: '/questions', element: 
    <QuestionPage />
  },
  { path: '/lose_game', element: <LoseGamePage />}
]