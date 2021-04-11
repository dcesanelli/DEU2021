import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  return <>
    <h2>Bienvenidos al rompecabezas!!!</h2>
    <button onClick={() => history.push('/juego/facil')}>Fácil</button>
    <button onClick={() => history.push('/juego/medio')}>Medio</button>
    <button onClick={() => history.push('/juego/dificil')}>Difícil</button>
  </>;
}
export default Home;
