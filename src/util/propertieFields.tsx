import HomePage from "../components/HomePage";
import QuestionPage from "../components/QuestionPage";


export const routePathsAndElements = [
  {path: '/', element: <HomePage />},
  {path: '/questions', element: 
    <QuestionPage />
  }
]