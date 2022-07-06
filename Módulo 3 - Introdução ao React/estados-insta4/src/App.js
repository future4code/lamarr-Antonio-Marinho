import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {

  const pessoa =[
    { nomeUsuario: "Zé", fotoUsuario: "https://media.istockphoto.com/photos/senior-hipster-man-wearing-eyeglasses-posing-on-green-background-tech-picture-id1269810648?k=20&m=1269810648&s=612x612&w=0&h=-HbfV6NjJ1efV_fOb16mRZzGWNSGPtSWoY_kvfbfFgE=", fotoPost: "https://media.istockphoto.com/photos/couple-of-young-man-and-woman-dancing-hiphop-at-studio-picture-id993737316?k=20&m=993737316&s=612x612&w=0&h=wEPpfl_8HTzJVix7AZjRpm_Qh26t7CJHqHQdU7LynDc="},
    { nomeUsuario: "Raimundinha", fotoUsuario: "https://media.istockphoto.com/photos/young-modern-man-holding-smart-phone-in-hands-looking-at-camera-with-picture-id1326852410?k=20&m=1326852410&s=612x612&w=0&h=LVnG5tBN0JlnUMXea5A1Z-Fck7s6IqdzWOxcj4I7FGk=", fotoPost: "https://cdn.pixabay.com/photo/2017/10/29/17/31/online-2900303_960_720.jpg"},
    { nomeUsuario: "Boby", fotoUsuario: "https://cdn.pixabay.com/photo/2017/10/29/15/25/stormtrooper-2899982_960_720.jpg", fotoPost: "https://cdn.pixabay.com/photo/2016/10/31/02/29/woman-1784755_960_720.jpg"}
   ]
   const ListaPessoa = pessoa.map((elemento, index) =>{
    return <Post
    nomeUsuario={elemento.nomeUsuario}
    fotoUsuario={elemento.fotoUsuario}
    fotoPost={elemento.fotoPost}
    key={index}
    />
   })
return(
  <div className='MainContainer'>
           <div>
    {ListaPessoa}
           </div>
  </div>
  
)

}


export default App;
