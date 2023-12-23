export async function fetchPokemonApi(id) {
  const array = [...Array(12).keys()].map(num => id + num);
  const request = array.map(id =>fetch(`https://pokeapi.co/api/v2/pokemon/${id}`));
  try {
    
    // 병렬처리를 이용한 빠른 데이터 api 호출 
    const response = await Promise.all(request);
    const pokemonDataArray = await Promise.all(response.map(response => response.json()));
    const pokemonData = pokemonDataArray.map((value)=>{return {
      'id' : value.id,
      'name' : value.name,
      'type' : value.types,
      'image' : value.sprites.front_default
    }})
    return pokemonData;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch data');
  }
}