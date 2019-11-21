import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import NoteApp from './Components/NoteApp';
import Counter from './Components/Counter';
import App from './Components/App';
import Calculator2 from './Components/Calculator2';
import Indecision from './Components/Indecision';
import Inventory from './Components/PhotoAlbum'
<<<<<<< HEAD

let Appl = () => {
    return (
    <Inventory />
=======
import PhotoAlbum from './Components/PhotoAlbum'
import Project from './Components/Project'

let Appl = () => {
    return (
    < Project />
>>>>>>> 0fb382854fe6ccfd4a146d3a7b9974f271687d9c
    )
}





 


ReactDOM.render(<Appl />, document.getElementById('root'));


