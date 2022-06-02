import { AppBar, Button, Container } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import './navbar.scss'
import { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { toggleCart } from '../../store/cart/cart.slice'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-scroll'

const Navbar: FC = () => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const { cartItems } = useAppSelector((state) => state.cartReducer)
   const [click, setClick] = useState<boolean>(false)
   const toTop = () => {setClick(!click)}

   return (
      <AppBar sx={{ zIndex: 100 }} position={'fixed'} color={'default'}>
         <Container maxWidth={'xl'}>
            <div className={'navbar'}>
               <Link to='top' duration={500} smooth={true} offset={-100} onClick={toTop} ><h1  onClick={() => navigate('/')} className={'navbarLogo'}>
                  MyStore
               </h1></Link>
               <Button
                  onClick={() => dispatch(toggleCart(true))}
                  startIcon={<ShoppingCartIcon />}
                  variant={'outlined'}
               >
                  Cart({cartItems.length})
               </Button>
            </div>
         </Container>
      </AppBar>
   )
}
export default Navbar
