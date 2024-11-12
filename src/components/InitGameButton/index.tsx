interface IInitGameButton {
  onClick: () => void
}

const InitGameButton: React.FC<IInitGameButton> = ({onClick}) => {

  return (
    <button className="start-game-button" onClick={onClick}>Iniciar Jogo</button>
  )
}

export default InitGameButton