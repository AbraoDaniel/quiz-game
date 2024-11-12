import { Typography } from "antd"

interface IResultBoard {
  points: number
  questionsQtd: number
  errors: {question: string, correctAnswer: string, userAnswer: string}[]
}

const ResultBoard: React.FC<IResultBoard> = ({points, questionsQtd, errors}) => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <Typography style={{color: 'white', fontSize: 26, fontWeight: 'bold'}}>Você acertou {points} de {questionsQtd} questões 🎉</Typography>
            <strong>Ver mais informações</strong>
          </div>
        </div>
        <div className="front">
          
          <div className="img">
            <div className="circle">
            </div>
            <div className="circle" id="right">
            </div>
            <div className="circle" id="bottom">
            </div>
          </div>

          <div className="front-content">
            <div className="description">
              <div className="title">
                {errors?.filter((a: {question: string}) => a?.question !== undefined)?.map((wrongQuestion) => {
                  return (
                    <p>
                      {`Na questão ${wrongQuestion.question + 1}, você respondeu ${wrongQuestion.userAnswer}, mas a resposta era ${wrongQuestion.correctAnswer}`}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultBoard