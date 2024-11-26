import { Typography } from "antd"

interface IResultBoard {
  points: number
}
const ResultBoard: React.FC<IResultBoard> = ({points}) => {
  return (
    <div className="card">
      <div className="win-board" style={{}}>
        <Typography style={{color: 'white', fontSize: 26, fontWeight: 'bold'}}>{`PARABÉNS!!! Você acertou ${points} questões 🎉`}</Typography>
      </div>
    </div>
  )
}

export default ResultBoard