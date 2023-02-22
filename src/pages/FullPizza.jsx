import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://63ba93fb56043ab3c79e9aed.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        alert('Произошла ошибка, попробуйте позже');
        navigate('/');
      }
    }

    fetchPizza();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pizza) {
    return <div className="container">Загрузка...</div>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt={pizza.title} />
      <h1>{pizza.title}</h1>
      <h3>{pizza.price} ₽</h3>
    </div>
  );
};

export default FullPizza;
