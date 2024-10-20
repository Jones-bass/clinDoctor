import { Route, Routes } from 'react-router-dom'
import { Home } from './page/home'
import { ServicePage } from './page/servicePage'
import { DefaultLayout } from './layout'
import { ContactPage } from './page/contactPage'
import { AboutPage } from './page/aboutPage'
import { SignUp } from './page/sign-up'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/serviços" element={<ServicePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Route>
      <Route path="/cadastro" element={<SignUp />} />
    </Routes>
  )
}