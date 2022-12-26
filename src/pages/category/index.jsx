import React, { useEffect, useState } from 'react'
import HeaderTopCommon from '../../components/common/HeaderTop'
import { CategoryContainer } from './styled-index'
import { useDispatch } from 'react-redux';
import ProductComponent from '../../components/product';
import { GetProduct, GetProducts } from '../../redux/products';
function Category() {
  const [open , setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProducts())
  }, [])
  useEffect(() => {
    dispatch(GetProduct());
  }, [])
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <CategoryContainer>
      <HeaderTopCommon title={"коммерческие и жилые"} onClick={handleOpen} textBtn={"коммерческие и жилые добавить"}/>
      <ProductComponent handleClose={handleClose} open={open}/>
    </CategoryContainer>
  )
}
export default Category