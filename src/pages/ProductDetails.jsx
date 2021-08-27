import React from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails = (props) => {
  const params = useParams();
  console.log(params);
  let details;
  if (params.product === 'boat') {
    details = 'A very nice boat';
  }
  return (
    <section>
      <h3>Title: {params.product}</h3>
      <p>Details: {details}</p>
    </section>
  );
};

export default ProductDetails;
