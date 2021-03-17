import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Particles from 'react-particles-js'
function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                color: '#f9ab0',
                width: 6,
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  )
}

export default App
