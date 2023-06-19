import ReactPaginate from 'react-paginate'
import { Icon, Wrapper } from './styles'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

type Props = {
  changePage: (currentPage: number) => void
  totalPages: number
}

export default function Pagination({ changePage, totalPages }: Props) {
  return (
    <Wrapper>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <Icon>
            <HiChevronRight />
          </Icon>
        }
        onPageChange={({ selected }) => changePage(selected)}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel={
          <Icon>
            <HiChevronLeft />
          </Icon>
        }
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="pagination-item"
        activeClassName="pagination-item__active"
        previousClassName="pagination-item"
        nextClassName="pagination-item"
        disabledClassName="pagination-item__disabled"
        breakClassName="pagination-item"
      />
    </Wrapper>
  )
}
