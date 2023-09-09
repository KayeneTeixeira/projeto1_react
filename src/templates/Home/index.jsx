
import './style.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/button';

// setTimeout -> depois de 5 segundos(5000) ele mostra

class Home extends Component{//componente de classe
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
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 20
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

    const {page, postsPerPage} = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage), // paginação, tem uma quantidade de posts mas quando aperta  botao mostra mais 
      allPosts: postsAndPhotos
    });
  }

  loadMorePosts = () => {
    const{
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage

    const nextPosts = allPosts.slice(nextPage, nextPage+postsPerPage)
    posts.push(...nextPosts)//esses ... espalham os posts sem criar outro array;

    this.setState({posts, page: nextPage})
  }

  // componentDidUpdate(){ //toda vez q atualiza faz isso
  // }

  // componentWillUnmount(){ // quando um componente for desmontado, faz isso
  // }

  // Sempre seutiliza a palavra handle pq é tipico do react 
  
  render(){
    const {posts, page, postsPerPage, allPosts} = this.state;

    const noMorePosts = page+postsPerPage >= allPosts.length;
    
    return (
      <section className='container'>
        <Posts posts={posts}/>
        <div class='button-container'>
          <Button
            text='Load more posts'
            quandoClica = {this.loadMorePosts}// isso eu estou mandando um atributo, não a ação de clique
            disabled={noMorePosts}
          />
        </div>
        
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

export default Home; //pra usar o componente fora deste arquivo
