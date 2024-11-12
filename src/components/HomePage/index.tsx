import { Col, Row} from "antd"
import { useNavigate } from "react-router-dom"
import Presenter from "../Presenter"
import InitGameButton from "../InitGameButton"


const HomePage: React.FC = () => {
  const navigate = useNavigate()
  // const buttons = [
  //   {title: 'Iniciar Jogo', action: 'init_game', path: '/questions'},
  // ]

  return (
    <Row style={{width: '100vw'}}>
      <Col xs={14}>
        <div style={{backgroundColor: 'black', height: '100vh', display: 'grid', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{width: '50vw', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <p className="title-home-page">UM QUIZ DIVERTIDO E EDUCATIVO</p>
          </div>
          <div style={{width: '50vw', height: '50vh', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            <InitGameButton onClick={() => navigate('/questions')}/>
          </div>
        </div>
      </Col>
      <Col xs={10}>
        <Presenter />
      </Col>
    </Row>
  )
}

export default HomePage