import { Container,ContainerMain, ContainerTitulo, ImagAvatar, ImgSearch, ImgTitulo, Link, ListaLink, ListaRede } from "./styled";
import Aranha from '../../assets/image/aranha.svg'
import Facebook from '../../assets/image/facebook.svg'
import Instagram from '../../assets/image/instagram.svg'
import Twitter from '../../assets/image/twitter.svg'
import Icone from '../../assets/image/iuricode 1.svg'
import Marvel from '../../assets/image/marvel.svg'
import Search from '../../assets/image/search.svg'
import Titulo from '../../assets/image/titulo.svg'
import Play from '../../assets/image/play.svg'
import { useEffect, useState } from "react";



export default function Home(){

    const [Avatar, setAvatar] = useState({})
    const getAvatar = async ()=>{
       await fetch("https://api.github.com/users/LuanCarlosCar").then(response => response.json()).then(data => setAvatar(data))
    }
    useEffect(()=>{
       getAvatar();
    },[])
    console.log(Avatar)



    return(
        <Container>

        
        <ContainerMain>

            <header>
                <img src={Marvel} alt="icone" />
                <img  src={Aranha} alt="icone" />
                <ListaLink>
                    <li><Link>home</Link></li>
                    <li><Link>sinopse</Link></li>
                    <li><Link>elenco</Link></li>
                </ListaLink>
            </header>
            <div>
                <ImagAvatar src={Avatar.avatar_url} alt="icone" />
                <ListaRede>
                    <li><a><img src={Instagram}  alt="icone" /></a></li>
                    <li><a><img src={Twitter}  alt="icone" /></a></li>
                    <li><a><img src={Facebook}  alt="icone" /></a></li>
                </ListaRede>
                <ImgSearch src={Search}/>

            </div>
        
        </ContainerMain>
            <ContainerTitulo>
                <ImgTitulo src={Titulo} alt='titulo' />
                <a href="#">assista ao trailer<img src={Play} /></a>
            </ContainerTitulo>
        </Container>
    )
}