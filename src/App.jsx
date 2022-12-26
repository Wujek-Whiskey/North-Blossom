import React, { useEffect, useState } from 'react'
import { Router } from '@routes'
import { Loader } from '@components'
import '@styles/index.scss'

const App = () => {
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])

  return loader ? <Loader /> : <Router />
}

export default App
