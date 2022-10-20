import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { client } from './lib/apollo';
import './styles/global.css';

const GET_VERTICALS = gql`
  query {
    verticals {
      id
      nome
    }
  }
`;

interface Verticals {
  id: string;
  nome: string;
}

function App() {
  const { data } = useQuery<{ verticals: Verticals[] }>(GET_VERTICALS)

  return (
    <div className="App">
      <ul>
        {data?.verticals.map(vertical => {
          return <li key={vertical.id}>{vertical.nome}</li>
        })}
      </ul>
    </div>
  )
}

export default App
