import styled from "styled-components";
import Background from "../../assets/image/background.svg"

export const Container = styled.div`
    position: relative;
    
`;
export const ContainerMain = styled.main`
    background: url(${Background});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr auto;
    header{
            display: flex;
            width: 100%;
            height: 70px;
            background: rgba(29, 29, 29, 0.5);
            align-items: center;
            grid-column: span 1 / 2;
            padding: 32px 130px;
            box-sizing: border-box;
            justify-content: space-between;
            img{
                height: 40px;
            }
        }

    div{
        grid-column: span 1 / 1;
        grid-row: 1;
        width: 90px;
        height: 100%;
        padding: 25px;
        box-sizing: border-box;
        background: rgba(29, 29, 29, 0.5) ;
        position: relative;
    }
`;
export const ImagAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;
export const ListaLink = styled.ul`
    display: flex;
    list-style: none;
    box-sizing: border-box;  
`;
export const Link = styled.a`
        text-decoration: none;
        font-family: 'Sora', sans-serif;
        font-weight: 400;
        font-size: 20px;
        color: #F9F9F9;
        margin-right: 58px;
        text-transform: uppercase;
        transition: 0.3s;
        cursor: pointer;
        &:hover{
            border-bottom: 2px solid #F9F9F9 ;
        }
`;

export const ListaRede = styled.ul`
    margin-top: 70px ;
    li{
        margin-bottom:70px;
    }
`;
export const ImgSearch = styled.img`
    position: absolute;
    bottom: 30px;
    
`;


export const ContainerTitulo = styled.div`
    grid-column: span 1 /2 ;
    box-sizing: border-box;
    position: absolute;
    top: 30%;
    right: 40%;
    a{
        text-decoration: none;
        background: #1D1D1D;
        width: 280px;
        height: 50px;
        font-family: 'Sora', sans-serif;
        font-size: 20px;
        font-weight: 600;
        display: flex;
        border: 1px solid red;
        box-sizing: border-box;
        padding: 22px 0;
        text-transform: uppercase;
        color: #F9F9F9;
        justify-content: center;
        align-items: center;
        border-radius: 20px 0 0 0;
        margin: auto ;
  
        img{
            margin-left: 10px;
        }
    }

`;
export const ImgTitulo = styled.img`
    width: 374.63px;
    height: 214px;
`;