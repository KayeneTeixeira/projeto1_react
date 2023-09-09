import './style.css'
// estamos separando os componentes é recomendado 
// componentes são classes com o método render ou funções que retornam jsx 
// as props são propriedades/atributos que eu passo para o meu componente, por exemplo este post q usaremos ({post.title})
export const PostCard = (props) => {
  const post = props.post;
  return(
    <div className='post'>
        <img src={post.cover} alt={post.title}/>
        <div /*key={post.id}*//*Serve pra melhorar a performance, indicando como único, ele vai direto e muda aquele elemento, ela deve estar no elemento root/> o pai , isos sempre q eu tiver um map*/ className='post-content'>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
    </div>
  )
}