import React , {useEffect , useState }from 'react' ;
import { getPost } from "./getPost" ;
import PropTypes from 'props-types' ; 


const Posts = ({ handlePostId }) => {

  const [ posts ,setPosts ] = useState ( null )
  const [ error , setError] = useState ( false ) 
  const [ isLoading ,setLoading] = useState ( false )

  useEffect( ()=>{
    getPost().then((data) => {
      setLoading(true)
      setPosts(data)
    }).catch( ()=>{
      setError(true)
      setPosts( null )
    }).finally( ()=>{
      setLoading(false)
    })
  },[]) 

  return (
    <div>
      { isLoading && <p>Loading...</p> }
      { error && <p> Hay Errores en la carga de datos</p>}

      <ul>
        { posts && posts.map((post)=> (
          <li onClick={()=> handlePostId(post.id)} key={post.id}> { post.title} </li>
        ))}
      </ul>
    </div>
  )
}

Posts.propTypes = {
  handlePostId : PropTypes.func.isRequired
}

export default Posts ;