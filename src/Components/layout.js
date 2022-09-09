import React from 'react'
import Hero from './Hero'
import NavBar from '../Components/nav'
import GetStarted from './GetStarted';
import Service from './service'
import Testimonials from './testimonials'
import Contacts from './Contacts'
export default function Layout() {
  return (
    <>
    
    <NavBar/>
    <Hero/>
    <GetStarted/>
    <Service/>
    <Testimonials/>
    <Contacts/>
    </>
  )
}
