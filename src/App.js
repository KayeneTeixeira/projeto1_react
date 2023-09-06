import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{//componente de classe
  // Criando estado que manda renderizar quando ele mudar
  // constructor(props){
  //   super(props);
  //   this.handlePClick = this.handlePClick.bind(this); //pra não usar isso aqui é só colocar arrow function nos métodos
  //   this.state = {
  //     name: 'Kayene Teixeira',
  //     counter: 0
  //   };
  // }
  state = { //assim vc não precisa do construtor
    // name: 'Kayene Teixeira',
    // counter: 0
    posts: [

    ]
  }

  // handlePClick(){
  //   this.setState({name: "Caio"});
  // }

  // handleAClick = (event) => { // arrow function n tem classe ent ela se referencia do elemento pai
  //   event.preventDefault(); // não faz o q o código ia fazer
  //   const {counter} = this.state;
  //   this.setState({counter: counter+1});
  // }

  componentDidMount(){ // assim que o componente for montado
    // setTimeout(() => {
      //   this.setState({
      //   posts: [
      //     {
      //       id:1,
      //       title: 'O título 1',
      //       body: 'O corpo 1'
      //     },
      //     {
      //       id:2,
      //       title: 'O título 1',
      //       body: 'O corpo 1'
      //     },
      //     {
      //       id:3,
      //       title: 'O título 1',
      //       body: 'O corpo 1'
      //     }
      //   ]
      // })
      // }, 5000); //depois de 5 segundos ele mostra
      
          this.setState({
          posts: [
            {
              id:1,
              title: 'O título 1',
              body: 'O corpo 1'
            },
            {
              id:2,
              title: 'O título 1',
              body: 'O corpo 1'
            },
            {
              id:3,
              title: 'O título 1',
              body: 'O corpo 1'
            }
          ]
        })

  }
  
  render(){
    const {posts} = this.state;
    return (
      <div className="App">
        {posts.map(post => ( 
          <div key={post.id}/*Serve pra melhorar a performance, indicando como único, ele vai direto e muda aquele elemento, ela deve estar no elemento root/> o pai */>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
          </div>
        ))}
      </div>
    );
  }
}

// function App() { // to iniciando um componente, sempre com letra maiuscula
  
// }

// <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p onClick={this.handlePClick} /* foi clicado escuta a ação */>
//             {name} {counter}
//           </p>
//           <a
//             onClick={this.handleAClick}
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Este é o link
//           </a>
//         </header>

export default App; //pra usar o componente fora deste arquivo
