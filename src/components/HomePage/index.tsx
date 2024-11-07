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
        <div style={{backgroundColor: 'black', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{width: '50vw', height: '50vh', alignItems: 'center', display: 'flex'}}>
            <InitGameButton onClick={() => navigate('/questions')}/>
            {/* {buttons?.map((button) => {
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
                  justifyContent: 'center',
                  boxShadow: '2px 5px 10px black',
                  borderRadius: '10px',
                }}
                onClick={() => navigate(button.path)}
                  >
                  {button.title}
                </Button>
              )
            })} */}
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