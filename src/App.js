import React, { useState, useEffect } from 'react';

function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {product ? (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
