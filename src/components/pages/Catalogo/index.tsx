import type { Product } from 'types/product';
import ProductCard from '../../ProductCard';
import { Link } from 'react-router-dom';
import Pagination from 'components/Pagination';
import type { SpringPage } from 'types/vendor/spring';
import { useEffect, useState } from 'react';
import { requestBackend } from 'util/requests';
import type { AxiosRequestConfig } from 'axios';
import CardLoading from './CardLoading';

import './style.css';

const Catalogo = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: 0,
        size: 12,
      },
    };

    setLoading(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <h1>Catálogo de Produtos</h1>
      </div>
      <div className="row">
        {isLoading ? (
          <CardLoading />
        ) : (
          page?.content.map((product) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalogo;
