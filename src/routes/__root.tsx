import * as React from 'react'
import { Outlet, createRootRoute, useLocation, useNavigate } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname

  // Puedes ocultar el footer en rutas específicas:
  const hideFooter = ['/register', '/login', '/password', '/delete'].includes(currentPath)

  const handleProfileClick = () => {
    if (currentPath === '/profile') {
      navigate({ to: '/delete' })
    } else {
      navigate({ to: '/profile' })
    }
  }

  return (
    <div className="min-h-screen">
      <Outlet />

      {!hideFooter && (
        <footer className="fixed bottom-0 left-0 w-full bg-[#4E1F00] px-[50px] py-3 z-50">
          <div className="flex justify-between items-center">
            <a href="/">
              <img
                src={currentPath === '/' ? '/src/assets/hogarA.svg' : '/src/assets/hogar.svg'}
                alt="hogar"
                className="w-7 h-7"
              />
            </a>
            <a href="/forum">
              <img
                src={currentPath === '/forum' ? '/src/assets/foroA.svg' : '/src/assets/foro.svg'}
                alt="foro"
                className="w-7 h-7"
              />
            </a>
            <a href="/favorites">
              <img
                src={currentPath === '/favorites' ? '/src/assets/favoritoA.svg' : '/src/assets/favorito.svg'}
                alt="favoritos"
                className="w-7 h-7"
              />
            </a>
            <button onClick={handleProfileClick}>
              <img
                src={currentPath === '/profile' ? '/src/assets/salir.svg' : '/src/assets/imagenPerfil.png'}
                alt="perfil"
                className="w-7 h-7"
              />
            </button>
          </div>
        </footer>
      )}
    </div>
  )
}
