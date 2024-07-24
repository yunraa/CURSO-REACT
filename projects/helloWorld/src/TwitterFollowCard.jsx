import { useState } from 'react';

import './App.css'
export function TwitterFollowCard({img,nombre,userName, initialIsFollowing}){
    const [isFollowing, setIsFollowing]= useState(initialIsFollowing)
    const text = isFollowing ? 'Siguiendo': 'Seguir'; 
    const buttonClass= isFollowing ? 'tw-follow-card-button is-following':'tw-follow-card-button'
    const handledClick=()=>{
        setIsFollowing(!isFollowing)
    }
    // console.log(isfollowing)
    // const addAt= (userName) =>`@${userName}`
    
    return(
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'><img alt={nombre} src={img} className='tw-follow-card-img' /></header>
           <div> <b>{nombre}</b>
            <span className='  .tw-follow-card-infoUserName'>@{userName}</span>
            </div>
            <aside>
                <button className={buttonClass} onClick={handledClick}>
                     <span className='tw-follow-card-text'>{text}</span>  
                    <span className='tw-follow-card-stopFollow'>Dejar de Seguir</span> 
                </button>
             </aside>
        </article>
    )
}