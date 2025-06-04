import * as React from 'react'
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const location = useLocation()
  const currentPath = location.pathname

  // Puedes ocultar el footer en rutas específicas:
  const hideFooter = ['/register', '/login'].includes(currentPath)


  return (
    <div className="min-h-screen pb-16">
      <Outlet />

      {!hideFooter && (
        <footer className="fixed bottom-0 left-0 w-full bg-[#4E1F00] px-[50px] py-3 z-50">
          <div className="flex justify-between items-center">
            <a href="/">
              <img
                src={currentPath === '/' ? '/src/assets/hogarA.svg' : '/src/assets/hogar.svg'}
                alt="hogar"
                className="w-6 h-6"
              />
            </a>
            <a href="/forum">
              <img
                src={currentPath === '/forum' ? '/src/assets/foroA.svg' : '/src/assets/foro.svg'}
                alt="foro"
                className="w-6 h-6"
              />
            </a>
            <a href="/favorites">
              <img
                src={currentPath === '/favorites' ? '/src/assets/favoritoA.svg' : '/src/assets/favorito.svg'}
                alt="favoritos"
                className="w-6 h-6"
              />
            </a>
            <a href="/profile">
              <img
                src={currentPath === '/profile' ? '/src/assets/salir.svg' : '/src/assets/imagenPerfil.png'}
                alt="perfil"
                className="w-6 h-6"
              />
            </a>
          </div>
        </footer>
      )}
    </div>
  )
}
