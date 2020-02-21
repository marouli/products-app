import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css';
import Header from '../Header/Header';

const ProductList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
		
  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      !cancel && setIsLoading(true) && setIsError(false);
      try {
        const {data} = await axios("http://private-5815fe-recommendationsknip.apiary-mock.com/products")
        !cancel && setData(data)
      } catch (error) {
        setIsError(true)
      } finally {
        !cancel && setIsLoading(false)
      }
    }

    fetchData()

    return () => { cancel = true }

  }, []);

  return (
    <>
    <Header />
    {isError && <div>Something went wrong ...</div>}
    {isLoading ? (
      <div>Loading...</div>
    ) : (
      <div className="c-list__container">
        <ul className="c-list__list">
            {data.map(item => (
              <li key={item.title} className="c-list__list-item">
                <Link to={item.title}>{item.title}</Link>
                <img className="c-list__list-item__img" src={item.images[0].thumb} alt={item.title}/>
                <p className="c-list__list-item__price">Price: {item.price}</p>
              </li>
            ))}
        </ul>
      </div>
    )}
    </>
  );
}

export default ProductList;