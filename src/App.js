import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { loadPosts } from './utils/load-posts';
import { Posts } from './components/Posts';

// setTimeout -> depois de 5 segundos(5000) ele mostra

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
    posts: []
  };

  // handlePClick(){
  //   this.setState({name: "Caio"});
  // }

  // handleAClick = (event) => { // arrow function n tem classe ent ela se referencia do elemento pai
  //   event.preventDefault(); // não faz o q o código ia fazer
  //   const {counter} = this.state;
  //   this.setState({counter: counter+1});
  // }

  async componentDidMount(){ // assim que o componente for montado
    // Preciso fazer uma chamada de uma api aqui
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json()) // retorna uma promisse que retorna uma resposta, a gente converte pra json
    // .then(posts => this.setState({posts})) //retorna a resposta já em json e seta
    await this.loadPosts();
  }

  loadPosts = async () => {
    // const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    // // const [posts] = Promise.all([postsResponse])

    // const postsJson = await posts.json();

    // this.setState({posts: postsJson})

    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json()) // retorna uma promisse que retorna uma resposta, a gente converte pra json
    // .then(posts => this.setState({posts}))

    const postsAndPhotos = await loadPosts();

    this.setState({posts: postsAndPhotos});
  }

  // componentDidUpdate(){ //toda vez q atualiza faz isso
  // }

  // componentWillUnmount(){ // quando um componente for desmontado, faz isso
  // }

  // Sempre seutiliza a palavra handle pq é tipico do react 
  
  render(){
    const {posts} = this.state;
    
    return (
      <section className='container'>
        <Posts posts={posts}/>
      </section>
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
