import './App.css';
import { createElement, useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [input1,setInput1] =useState('');
  const [input2,setInput2] =useState('');
  const [path_img,setPathImg] =useState('');

  const onChangeInput1 = function(evento){
    setInput1(evento.target.value);
  }

  const onChangeInput2 = function(evento){
    setInput2(evento.target.value);
  }

  const onChangeImg = function(evento){
    if(evento.target.value != null){
      setPathImg("img/"+evento.target.value+".jpg"); 
    }
  }

  const downloadImg = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      //document.body.appendChild(canvas)
      var img = canvas.toDataURL('img/png');
      var link = document.createElement('a');
      link.download= 'meme.png';
      link.href=img;
      link.click();
    });
  }

  return (
    <div className="App">

      <div className="">

        <select onChange={onChangeImg} className="content-select">
          <option>Seleccionar Imagen</option>
          <option value="Disaster" >Disaster</option>
          <option value="minion">Minions</option>
          <option value="panda">Pandas</option>
          <option value="tigre">Tigre</option>
        </select>

        <br/>
        <input className="sinbordefondo" onChange={onChangeInput1} placeholder='Primer texto'></input>
        <br/>
        <input className="sinbordefondo" onChange={onChangeInput2} placeholder='Segundo Texto'></input>

      </div>
          
    <button onClick={downloadImg}>EXPORTAR</button>
      <div id='meme' className='configMeme'>
        <span >{input1}</span>
        <span>{input2}</span>
        <img src={path_img}/>
      </div>
   </div>
  );
}

export default App;
