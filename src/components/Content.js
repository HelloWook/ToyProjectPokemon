import React,{useCallback, useEffect, useState} from 'react'
import { fetchPokemonApi } from '../services/pokemonApi';
import Card from './Card';
import "../styles/Content.css"


function Content() {
  const [loading ,setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);
  const [id, setId] = useState(1);

 

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true); // 로딩시작 
        const data = await fetchPokemonApi(id);
        setPokemonData(prevArray => [...prevArray, ...data]);
        setId(prevId => prevId + 12);
        
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false); 
      }
    }
    fetchData();
  }, []);

    return (
      <div className='Content'>
      {pokemonData.map((data, index) => (
        <Card key={index} id ={data.id} image ={data.image} name={data.name} type={data.type}/>
      ))}
      </div>
    );
  }

  export default Content;
