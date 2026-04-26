
import './style.css'
import vite from "../src/assets/react.svg";
function Home() {

  const users = [
    {
      id: '0012026',
      name: "alisson",
      age: 33,
      email: "alyssoncorinthia351@gmail.com"
    },

    {
      id: '0022026',
      name: "rafa",
      age: 23,
      email: "rafa2020@gmail.com"
    },

    {
      id: '0032026',
      name: "luizn",
      age: 13,
      email: "luizinhodaregional@gmail.com"
    }
  ];
  return (


    <div className="container">

      <form>

        <h1>Cadastro de usuários</h1>
        <input placeholder="NOME" name="NOME " type="text" />
        <input placeholder="IDADE" name="IDADE" type="number" />
        <input placeholder="EMAIL" name="EMAIL" type="email" />
        <button type="button">Cadastrar</button>
      </form>
      {users.map((user) => (

        <div key={user.id} className="card" >
          <div>
            <p>NOME: <span>{user.name}</span></p>
            <p>IDADE: <span>{user.age}</span></p>
            <p>EMAIL: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={vite} />
          </button>
        </div>


      ))}
    </div>
  );
}

export default Home;
