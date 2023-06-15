import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useFilter(products) {
  const [searchParams, setSearchParams] = useSearchParams();

  const { min, max, rating, category, brand } = Object.fromEntries([
    ...searchParams,
  ]);
  useEffect(() => {
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  }, [min, max, rating, category, brand]);

  const prod = useMemo(() => {
    let prod = products;
    if (min) {
      prod = prod.filter((p) => {
        if (p.discountPrice) {
          return p.discountPrice >= min;
        }
        return p.price >= min;
      });
    }
    if (max) {
      prod = prod.filter((p) => {
        if (p.discountPrice) {
          return p.discountPrice <= max;
        }
        return p.price <= max;
      });
    }
    if (rating) {
      prod = prod.filter((p) => {
        return Math.floor(p.rating) >= parseInt(rating);
      });
    }
    if (category) {
      prod = prod.filter((p) => {
        return p.category === category;
      });
    }
    if (brand) {
      prod = prod.filter((p) => {
        return p.brand === brand;
      });
    }
    return prod;
  }, [searchParams, products]);

  return prod;
}
