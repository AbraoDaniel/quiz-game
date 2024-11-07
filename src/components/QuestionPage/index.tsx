import { QuestionOutlined } from "@ant-design/icons"
import { Button, Card, Col, Modal, Row, Tooltip, Typography } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Presenter from "../Presenter"

const QuestionPage: React.FC = () => {
  const navigate = useNavigate()
  const currentQuestion = {
    title: 'Essa aqui será a pergunta meu amigo, vou escrever ela grande pra que eu possa saber o tamanho que ficará bom sem estourar, vai dar',
    tip: 'essa é a dica filhote'
  }

  const currentQuestion2 = {
    title: 'Mudei a pergunta pra ver como que vai ficar agora',
    tip: 'A DICA DESSA AQUI É DIFERENTE'
  }
  
  const answersValues = [
    {description: 'Testando aqui meu amigo', value: 'A'},
    {description: 'Testando aqui meu amigo2', value: 'B'},
    {description: 'Testando aqui meu amigo3', value: 'C'},
    {description: 'Testando aqui meu amigo4', value: 'D'},
  ]

  const answersValues2 = [
    {description: 'Primeira alternativa', value: 'A'},
    {description: 'Segunda alternativa', value: 'B'},
    {description: 'Terceira alternativa', value: 'C'},
    {description: 'Quarta alternativa', value: 'D'},
  ]
 
  const [showTipModal, setShowTipModal] = useState(false)
   
  const [answers, setAnswers] = useState(answersValues)
   
  const [question, setQuestion] = useState(currentQuestion)

  function changeValues() {
    setAnswers(answersValues2)
    setQuestion(currentQuestion2)
  }

  return (
    <Row style={{width: '100vw'}}>
      <Col xs={14}>
        <div style={{backgroundColor: 'blue', height: '100vh', display: 'grid', justifyContent: 'center'}}>
          <Row justify="space-between" style={{alignItems: 'center'}}>
            <Button onClick={() => navigate('/')}>
              {'Finalizar partida'}
            </Button>
            <Tooltip title={'Solicitar Dica'} placement="right">
              <Button type="primary" shape="circle" icon={<QuestionOutlined />} onClick={() => setShowTipModal(true)} />
             {/* <QuestionCircleOutlined style={{color: 'black', cursor: 'pointer', fontSize: 30}}/> */}
            </Tooltip>
          </Row>
          <Card style={{
            boxShadow: '2px 5px 10px black',
            justifyContent: 'center', 
            display: 'flex', 
            background: 'green', 
            height: 220,
            width: '50vw', 
            fontSize: 34, 
            color: 'white',
            borderRadius: '10px',
            fontWeight: 'bold'
          }}>
            {question?.title}
          </Card>
          <div style={{width: '50vw', height: '50vh'}}>
            {answers?.map((answer) => {
              return (
                <Button style={{
                  display: 'flex',
                  width: '100%', 
                  padding: 15, 
                  alignItems: 'center', 
                  backgroundColor: 'black', 
                  height: '11vh', 
                  fontSize: 36, 
                  marginBottom: 20,
                  color: 'white',
                  justifyContent: 'start',
                  boxShadow: '2px 5px 10px black',
                  borderRadius: '10px',
                }}
                onClick={changeValues}
                  >
                  {answer.value}: {answer.description}
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
            {question?.tip}
          </Typography>
        </Modal>
      )}
    </Row>
  )
}

export default QuestionPage