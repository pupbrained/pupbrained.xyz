import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import Statusbar from './components/pages/statusbar/Statusbar'
import Window from './components/pages/Window'
import './assets/index.css'

const App = () => {
  const [active, setActive] = useState(1)

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
      const onWindowResize = () => {
        setWindowSize(window.innerWidth)
      }

      window.addEventListener('resize', onWindowResize)
      onWindowResize()

      return () => window.removeEventListener('resize', onWindowResize)
    }, [])

    return windowSize
  }

  const large = useWindowSize() < 1280
  const medium = useWindowSize() < 768
  const small = useWindowSize() < 640
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <main className='font-jetbrains bg-[url("/src/assets/imgs/bg.webp")] h-full w-full p-5'>
        <div className='gap-5 w-full h-full flex flex-col'>
          <Statusbar
            active={active}
            setActive={setActive}
            isMobileSmall={small}
            isMobileMed={medium}
          />
          <Window active={active} isMobile={large} />
        </div>
      </main>
    </QueryClientProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
