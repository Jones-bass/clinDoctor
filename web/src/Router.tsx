import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './page/home'
import { ServicePage } from './page/servicePage'
import { DefaultLayout } from './layout'
import { ContactPage } from './page/contactPage'
import { AboutPage } from './page/aboutPage'
import { SignUp } from './page/sign-up'
import { SignIn } from './page/sign-in'
import { useAuth } from './hook/auth'
import { Dashboard } from './page/dashboard'
import { DoctorList } from './page/DoctorList'
import { AvailibityDoctors } from './page/availibityDoctors'

interface PrivateProps {
  children?: React.ReactNode
}

export function Router() {
  const PrivateRoute = ({ children }: PrivateProps) => {
    const { user } = useAuth()

    if (user) {
      return <>{children}</>
    } else {
      return <Navigate to="/" />
    }
  }

  const PublicRoute = ({ children }: PrivateProps) => {
    const { user } = useAuth()

    if (user) {
      // Se o usuário já estiver logado, redireciona para o dashboard
      return <Navigate to="/dashboard" />
    } else {
      return <>{children}</>
    }
  }

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/medicos" element={<DoctorList />} />
        <Route path="/detalhar-consulta/:doctorId" element={<AvailibityDoctors />} />
        <Route path="/servicos" element={<ServicePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Route>

      <Route path="/login" element={<PublicRoute><SignIn /></PublicRoute>} />
      <Route path="/cadastro" element={<PublicRoute><SignUp /></PublicRoute>} />
      
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

    </Routes>
  )
}