
import { useDispatch } from 'react-redux';
import TableAdd from './table';
function NewsComponent({open , handleClose}) {
  const dispatch = useDispatch();
  return (
      <>
      <TableAdd />
      </>
  )
}

export default NewsComponent