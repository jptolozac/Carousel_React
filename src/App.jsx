import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { GetImagesData } from './services/getImagesData'
import { Carousel } from './components/carousel'

function App() {
  const [imagesData, SetImagesData] = useState([])

  useEffect(() => {
    GetImagesData().then(data => SetImagesData(data))
  }, [])

  return (
    <section className='image-section'>
      <Carousel imagesData={imagesData} width={600} />
    </section>
  )
}

export default App
