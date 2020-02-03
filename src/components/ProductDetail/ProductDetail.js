import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductDetail.css';
import Carousel from '../Carousel/Carousel';
import CommentBox from '../Comment/CommentBox';


const ProductDetail = ({match: {params: {title}}}) => {
  const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
          setIsLoading(true)
					const result = await axios(`http://private-5815fe-recommendationsknip.apiary-mock.com/products`);           
					setData(result.data.filter(product => product.title === title)[0]);     
					setIsLoading(false)  
        }    
				fetchData(); 
		}, [title]);
		
	if (isLoading) {
			return <div>Loading...</div>
	}
	
	return (
    <div className="container">
      <div className="card">
        <h1>{data.title}</h1>
				<p>{data.description}</p>
				<p>{data.specification}</p>
				<p>Price: {data.price}</p>
				<div className="img-container">
					{data.images && 
						<Carousel images={data.images.map(image => image.original)}/>
					}
				</div>
		<CommentBox id={data.id}/>
        <Link to="/">Return to List View</Link>
      </div>
    </div>
  );
}

export default ProductDetail;