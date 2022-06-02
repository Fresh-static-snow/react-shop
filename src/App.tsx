import { useEffect } from 'react'
import AppRoutes from './routes/AppRoutes'
import './App.scss'
import { fetchProducts } from './store/products/products.action'
import { useAppDispatch } from './hooks/redux'

const App = () => {
   const dispatch = useAppDispatch()
   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])

   return <AppRoutes />
}

export default App
