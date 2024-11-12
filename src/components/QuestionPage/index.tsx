import { QuestionOutlined } from "@ant-design/icons"
import { Button, Card, Col, Modal,  Row, Tooltip, Typography } from "antd"
import {  useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import Presenter from "../Presenter"

const QuestionPage: React.FC = () => {
  const navigate = useNavigate();
  const questions = [
    {
      title: 'Qual é a fórmula química do dióxido de carbono?',
      tip: ' Tem dois átomos de oxigênio',
      correctAnswer: 'A'
    },
    {
      title: 'Quem pintou a Mona Lisa, uma das obras mais famosas do mundo?',
      tip: ' Um renomado artista italiano',
      correctAnswer: 'B'
    },
    {
      title: 'Qual é a capital do Brasil e por que foi escolhida como sede do governo?',
      tip: ' Fica no centro do país',
      correctAnswer: 'B'
    },
    {
      title: 'Quantos planetas existem no sistema solar?',
      tip: ' Eles orbitam o sol',
      correctAnswer: 'A'
    },
    {
      title: 'Quem foi o autor de “Dom Casmurro” e é considerado um dos maiores escritores brasileiros?',
      tip: ' Um nome bem conhecido na literatura brasileira',
      correctAnswer: 'A'
    },
    {
      title: 'Qual é a fórmula da água e como é formada?',
      tip: ' Apenas dois elementos químicos',
      correctAnswer: 'A'
    },
    {
      title: 'Em qual ano o Brasil foi descoberto pelos portugueses?',
      tip: ' Faz mais de 500 anos',
      correctAnswer: 'A'
    },
    {
      title: 'Qual é o maior órgão do corpo humano?',
      tip: ' Não é interno',
      correctAnswer: 'D'
    },
    {
      title: 'Qual o processo pelo qual as plantas produzem o próprio alimento?',
      tip: ' Envolve luz solar',
      correctAnswer: 'A'
    },
    {
      title: 'Qual é o animal mais rápido do mundo?',
      tip: ' Não é terrestre',
      correctAnswer: 'B'
    }
  ];

  const answers = [
    [
      { description: 'CO2', value: 'A' },
      { description: 'O2', value: 'B' },
      { description: 'H2O', value: 'C' },
      { description: 'CH4', value: 'D' }
    ],
    [
      { description: 'Michelangelo', value: 'A' },
      { description: 'Leonardo da Vinci', value: 'B' },
      { description: 'Raphael', value: 'C' },
      { description: 'Donatello', value: 'D' }
    ],
    [
      { description: 'Rio de Janeiro', value: 'A' },
      { description: 'Brasília', value: 'B' },
      { description: 'São Paulo', value: 'C' },
      { description: 'Salvador', value: 'D' }
    ],
    [
      { description: '8', value: 'A' },
      { description: '9', value: 'B' },
      { description: '7', value: 'C' },
      { description: '10', value: 'D' }
    ],
    [
      { description: 'Machado de Assis', value: 'A' },
      { description: 'Carlos Drummond de Andrade', value: 'B' },
      { description: 'Monteiro Lobato', value: 'C' },
      { description: 'Jorge Amado', value: 'D' }
    ],
    [
      { description: 'H2O', value: 'A' },
      { description: 'NaCl', value: 'B' },
      { description: 'CO2', value: 'C' },
      { description: 'CH4', value: 'D' }
    ],
    [
      { description: '1500', value: 'A' },
      { description: '1600', value: 'B' },
      { description: '1400', value: 'C' },
      { description: '1300', value: 'D' }
    ],
    [
      { description: 'Fígado', value: 'A' },
      { description: 'Cérebro', value: 'B' },
      { description: 'Coração', value: 'C' },
      { description: 'Pele', value: 'D' }
    ],
    [
      { description: 'Fotossíntese', value: 'A' },
      { description: 'Respiração', value: 'B' },
      { description: 'Fermentação', value: 'C' },
      { description: 'Glicólise', value: 'D' }
    ],
    [
      { description: 'Guepardo', value: 'A' },
      { description: 'Falcão-peregrino', value: 'B' },
      { description: 'Águia', value: 'C' },
      { description: 'Tigre', value: 'D' }
    ]
  ];
  
 
  const [showTipModal, setShowTipModal] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [errorQuestions, setErrorQuestions] = useState([{}])
  const [points, setPoints] = useState(0)
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count === 0) {
      navigate("/lose_game", { state: { points, questionsQtd: questions?.length, errors: errorQuestions } });
    }
  }, [count])

  function handleAnswer(answer: string) {
    if (questions[questionIndex]?.correctAnswer === answer) {
      setPoints(state => state + 1)
    } else {
      setErrorQuestions(state => [...state, {question: questionIndex, correctAnswer: questions[questionIndex]?.correctAnswer,userAnswer: answer}])
      setCount(state => state - 1)
    }
    if (questionIndex <= questions?.length - 1) {
      setQuestionIndex(state => state + 1)
    } 
  }

  const hearts = Array.from({ length: count }).map((_, index) => (
    <img key={index} src={'src/assets/heart.png'} style={{ marginRight: 5}}/>
  ));

  return (
    <Row style={{width: '100vw'}}>
      <Col xs={14}>
        <div style={{backgroundColor: 'black', height: '100vh', display: 'grid', justifyContent: 'center'}}>
          <Row justify="space-between" style={{alignItems: 'center'}}>
            <Button style={{backgroundColor: '#303030', color: 'white'}} onClick={() => navigate('/')}>
              {'Finalizar partida'}
            </Button>
            <div style={{ width: 150, height: 25, display: 'flex'}}>
              {hearts}
            </div>
            <Tooltip title={'Solicitar Dica'} placement="right">
              <Button type="primary" shape="circle" style={{backgroundColor: '#303030'}} icon={<QuestionOutlined />} onClick={() => setShowTipModal(true)} />
            </Tooltip>
          </Row>
          
          <Card style={{
            boxShadow: '2px 5px 10px black',
            justifyContent: 'center', 
            display: 'flex', 
            background: '#303030', 
            height: 150,
            width: '50vw',
            alignItems: 'center',
            fontSize: 26, 
            color: 'white',
            borderRadius: '10px',
            fontWeight: 'bold'
          }}>
            {questions[questionIndex]?.title}
          </Card>
          
          <div style={{width: '50vw', height: '50vh'}}>
          {answers[questionIndex]?.map((answer) => {
            return (
              <Button style={{
                display: 'flex',
                width: '100%', 
                padding: 15, 
                alignItems: 'center', 
                backgroundColor: '#303030', 
                height: '11vh', 
                fontSize: 36, 
                marginBottom: 20,
                color: 'white',
                justifyContent: 'start',
                boxShadow: '2px 5px 10px black',
                borderRadius: '10px',
              }}
              onClick={() => handleAnswer(answer?.value)}
                >
                {answer?.value}: {answer?.description}
              </Button>
            )
          })}
        </div>
        </div>
      </Col>
      <Col xs={10}>
        <Presenter />
      </Col>
      {showTipModal && (
        <Modal 
          title="Dica solicitada" 
          open={true} 
          onCancel={() => setShowTipModal(false)}
          okButtonProps={{ style: {display: 'none'}}}
          cancelButtonProps={{style: {display: 'none'}}}
        >
          <Typography>
            {questions[questionIndex]?.tip}
          </Typography>
        </Modal>
      )}
    </Row>
  )
}

export default QuestionPage