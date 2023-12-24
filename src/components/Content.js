import React,{ useEffect, useState} from 'react'
import { fetchPokemonApi } from '../services/pokemonApi';
import Card from './Card';
import { useInView } from "react-intersection-observer"

import "../styles/Content.css"


function Content() {
  const [loading ,setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);
  const [id, setId] = useState(1);
  const [ref, inView] = useInView();

  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true); 
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
  }, [inView]);
  
    return (
      <div className='Content'>
      {pokemonData.map((data, index) => (pokemonData.length -1 === index ? 
      (<Card key={index} id ={data.id} image ={data.image} name={data.name} type={data.type} ref={ref}></Card>) :
        (<Card key={index} id ={data.id} image ={data.image} name={data.name} type={data.type} ></Card>)
      ))}
      </div>
    );
  }

  export default Content;
