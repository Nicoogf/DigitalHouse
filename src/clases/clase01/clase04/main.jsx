import  React , { useState } from "react";
import "./app.css" ;
import Posts  from "./Posts" ;
import Post  from "./Post" ;

function MainComponent () {

    const [ postId , setPostId ] =  useState ( -1 ) ;
    const handlePostId = ( id ) =>{
        setPostId( id )
    }

    return (
        <main>
           {
            postId === -1 ? <Post handlePostId={ handlePostId } />: (
            
            <>
            <button onClick={ () => setPostId(-1)}> Back</button>
            <Post id={postId} />
            </>
            )
           }
        </main>
    )

} ;

export default MainComponent ; 