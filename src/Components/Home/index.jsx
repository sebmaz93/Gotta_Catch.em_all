import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CardMini from '../styledComponents/CardMini';
import {Flex} from '../styledComponents/Layouts';
import Button from '../styledComponents/Button';
import Footer from '../styledComponents/Footer';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(36);

  // Async outside of useEffect
  const fetch = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${limit *
        (page - 1)}`,
      {headers: {'cache-control': 'public, max-age=315000'}}
    );
    setPokemons(response.data.results);
  };

  //ComponentDidMount
  useEffect(() => {
    fetch();
  }, [limit, page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const changeLimit = e => {
    setLimit(e.target.value);
  };

  return (
    <div>
      <Flex>
        {!pokemons && <h4>Loading...</h4>}
        {pokemons &&
          pokemons.map(pokemon => <CardMini {...pokemon} key={pokemon.name} />)}
      </Flex>
      <Footer>
        <Button onClick={prevPage} disabled={page === 1}>
          Prev
        </Button>
        <p style={{margin: '0 8px'}}>Page: {page}</p>
        <select
          style={{margin: '0 8px', width: '50px'}}
          value={limit}
          onChange={changeLimit}
        >
          <option value={24}>24</option>
          <option value={36}>36</option>
          <option value={48}>48</option>
        </select>
        <Button onClick={nextPage}>Next</Button>
      </Footer>
    </div>
  );
};

export default Home;
