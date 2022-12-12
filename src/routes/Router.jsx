import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@components'
import { Homepage, PageNotFound, Contact, Biography, Works } from '@views'

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/realizacje'} element={<Works />} />
        <Route path={'/biografia'} element={<Biography />} />
        <Route path={'/kontakt'} element={<Contact />} />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
