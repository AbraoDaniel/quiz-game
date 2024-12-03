interface IResultBoard {
  points: number
}
const ResultBoard: React.FC<IResultBoard> = ({points}) => {
  return (
    <div className="card wallet">
      <div className="overlay"></div>
      <div className="circle">
          <img src="src/assets/party.png" />
      </div>
      <p style={{fontSize: 24, fontWeight: 'bold'}}>{`PARABÉNS!!! Você acertou ${points} questões 🎉`}</p>
    </div>
  )
}

export default ResultBoard