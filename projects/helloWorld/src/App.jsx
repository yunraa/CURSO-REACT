import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard'
const users=[
    {userName: 'yun_sevenup',
    name: 'Arnuy',
    isFollowing: true,
    img: 'https://pbs.twimg.com/profile_images/583794612357181440/zNzyc0rU_400x400.jpg'
    },
    {userName: 'Di_stefano',
        name: 'Alfredo ',
        isFollowing: true,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtitUElj7JIYvx7SaBzql4HucWpHbG82egw&s'
    },
    {userName: 'midudev',
        name: 'Miguel Angel',
        isFollowing: false,
        img:'https://yt3.googleusercontent.com/ytc/AIdro_kv84TB3x0uLWcJwfLWDX0rA9R_r22ckPwvpWxsS5x29eE=s900-c-k-c0x00ffffff-no-rj'
    }
        
]
export function App(){
    return(
        <section className='App'>
            {
            
            users.map( user => {
                const{ userName, name , isFollowing, img }= user
                return(
                <TwitterFollowCard userName={userName} initialIsFollowing={isFollowing} img={img}>
                     {name} 
                </TwitterFollowCard>
           ) })

        /* <TwitterFollowCard  initialIsFollowing img ={"https://pbs.twimg.com/profile_images/583794612357181440/zNzyc0rU_400x400.jpg"} nombre={"Arnuy"} userName={"yun_sevenup"}/>
        <TwitterFollowCard  img ={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtitUElj7JIYvx7SaBzql4HucWpHbG82egw&s"} nombre={"Alfredo"} userName={"Stefano_Di"}/> */}
    
      </section>
    
        )
}