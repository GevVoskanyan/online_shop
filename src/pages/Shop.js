import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import Wrapper from '../components/Wrapper';
import ReactPaginate from 'react-paginate';
import products from '../products.json';
import ProductItem from '../components/products/ProductItem';
import SideBar from '../components/products/SideBar';
import useFilter from '../helpers/useFilter';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Shop(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filteredProducts = useFilter(products);
  const itemsPerPage = 10;
  const selected =
    searchParams.get('page') > 0 ? searchParams.get('page') - 1 : 0;
  const itemOffset = selected * itemsPerPage;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
  const navigate = useNavigate();

  const handlePageClick = (event) => {
    event.selected
      ? setSearchParams({ page: event.selected + 1 })
      : setSearchParams({ page: '1' });
  };

  return (
    <Wrapper>
      <Breadcrumbs />
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-5">
              <SideBar />
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="product__discount">
                <div className="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div>
                <div className="row"></div>
              </div>
              <div className="filter__item">
                <div className="row">
                  <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                      <span>Sort By</span>
                      <select>
                        <option value="0">Default</option>
                        <option value="0">Default</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                      <h6>
                        <span>16</span> Products found
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                      <span className="icon_grid-2x2"></span>
                      <span className="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {currentItems.map((data) => (
                  <ProductItem key={data.id} data={data} />
                ))}
              </div>
              <div className="product__pagination">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={pageCount}
                  pageCount={pageCount}
                  forcePage={selected}
                  previousLabel="previous"
                  renderOnZeroPageCount={null}
                  containerClassName="pagination"
                  pageLinkClassName="page-num"
                  previousLinkClassName="page-num"
                  nextLinkClassName="page-num"
                  activeLinkClassName="active"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Shop;
