import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export function DefaultLayout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  )
}
