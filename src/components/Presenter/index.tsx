const Presenter: React.FC = () => {
  return (
    <div style={{backgroundPosition: 'center', backgroundImage: 'linear-gradient(#af1717, #230404)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
      <img src={'src/assets/presenter.png'} style={{width: '70%', height: '80vh', filter: 'drop-shadow(2px 4px 6px black)'}}/>
    </div>
  )
}

export default Presenter