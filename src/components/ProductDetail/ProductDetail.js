import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductDetail.css";


const ProductDetail = ({match: {params: {title}}}) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
          setIsLoading(true)
					const result = await axios(`http://private-5815fe-recommendationsknip.apiary-mock.com/products`)            
					setData(result.data.filter(product => product.title === title)[0])      
					setIsLoading(false)  
        }    
				fetchData(); 
		}, [title]);
		
	if (isLoading) {
			return <div>Loading...</div>
	}

	// console.log('blah')
	// console.log(data)
	// console.log(data.images)
	// console.log('blah2')

	return (
    <div className="container">
      <div className="card">
        <h1>{data.title}</h1>
        <div className="img-container">
					{data.images && data.images.map(image => <img src={image.original} alt={title} />)}
        </div>
					<p>{data.description}</p>
        <Link to="/">Return to List View</Link>
      </div>
    </div>
  );
}

export default ProductDetail;