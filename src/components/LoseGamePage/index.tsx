import { Button, Col, Modal, Row, Typography } from "antd"
import Presenter from "../Presenter"
import ResultBoard from "../ResultBoard"
import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"

const LoseGamePage: React.FC = () => {
  const navigate = useNavigate()
  const [showLoseGameModal, setShowLoseGameModal] = useState(true)
  const location = useLocation();
  const { points, questionsQtd, errors } = location.state || {};

  return (
    <Row style={{width: '100vw'}}>
      <Col xs={14}>
        <div style={{backgroundColor: 'black', height: '100vh', display: 'grid', justifyContent: 'center'}}>
          <Row justify="space-between" style={{alignItems: 'center'}}>
            <Button className="question-button" style={{backgroundColor: '#303030', color: 'white'}} onClick={() => navigate('/')}>
              {'Retornar à tela inicial'}
            </Button>
          </Row>
          <div style={{
            justifyContent: 'center', 
            display: 'flex', 
            alignItems: 'center',
          }}>
            <ResultBoard points={points} questionsQtd={questionsQtd} errors={errors}/>
          </div>
        </div>
      </Col>
      <Col xs={10}>
        <Presenter />
      </Col>
      {showLoseGameModal && (
        <Modal 
          title="Limite de tentativas atingido" 
          open={true} 
          className="attempt-limit"
          cancelButtonProps={{style: {display: 'none'}}}
          onCancel={() => setShowLoseGameModal(false)}
          footer={[
            <Button key="back" className="return-to-init-page-button" onClick={() => setShowLoseGameModal(false)}>
              Visualizar relatório
            </Button>
          ]}
          >
          <Typography >
            {'Você atingiu o limite de tentativas, mas não fique triste, você pode tentar novamente quando quiser!'}
          </Typography>
        </Modal>
      )}
    </Row>
  )
}

export default LoseGamePage