import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [ plants, setPlants] = useState(data);

const remove =(id)=>{
  
  let newPlants = plants.filter(flower => flower.id !== id);
 setPlants(newPlants)
    
}
  

return ( <div>

    <div className="App">
       <h4>ОНЛАЙН МАГАЗИН</h4>
      <h2> САДОВАЯ ФЕРМА</h2>
      </div>

<div className="App">

  <h1>{plants.length} НОВЫХ ПОСТУПЛЕНИЙ САЖЕНЦЕВ </h1>

  {plants.map((plant => {
    const{id, name, sort, image} = plant;

    return( <div key={id}>

<div  className="list">

  <div> <p>{id} - {name} </p></div>
  <div> <p className='sort'>{sort} </p> </div>
  <div> <img src={image} width={250} alt='pic' /></div>
 </div>

<div>
  <button className='btn' onClick={()=>remove(id)} >Удалить</button>
</div>

    </div>)
  }))}
<br></br>

<div>
  <button className='btnall' onClick={()=>setPlants([])} >Удалить все</button>
</div>
</div>



</div>
  );
}

export default App;
