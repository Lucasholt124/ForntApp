import { ReactComponent as ArrowIcon }from 'assets/imagens/Seta.svg';

import './style.css';
import ReactPaginate from 'react-paginate';

type Props = {
  forcePage?: number;
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
}

const Pagination = ({  forcePage, pageCount, range, onChange } : Props) => {
  return (

    <ReactPaginate
    forcePage={forcePage}
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName='pagination-container'
      pageLinkClassName='pagination-item'
      breakClassName='pagination-item'
      previousClassName='arrow-previous'
      nextClassName='arrow-next'
      activeLinkClassName='pagination-link-active'
      disabledClassName='arrow-inactive'
      onPageChange={( items ) => (onChange) ? onChange(items.selected) : {}}
      previousLabel={<div className='pagination-arrow-container'><ArrowIcon /></div>}
      nextLabel={<div className='pagination-arrow-container'><ArrowIcon /></div>}
      />


  )
}

export default Pagination