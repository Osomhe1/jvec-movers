// src/pages/HomePage.jsx
import { useEffect, Suspense, lazy } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loader from '../components/Loader'

// Lazy load components
const Navbar = lazy(() => import('../components/Navbar'))
const HeroSection = lazy(() => import('../components/HeroSection'))
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'))
const OurTeam = lazy(() => import('../components/OurTeam'))
const WhatWeRepresent = lazy(() => import('../components/WhatWeRepresent'))
const GeographicCoverage = lazy(() =>
  import('../components/GeographicCoverage')
)
const ClientsWeServe = lazy(() => import('../components/ClientsWeServe'))
const SmoothMoveBlog = lazy(() => import('../components/SmoothMoveBlog'))
const FreeQuoteSection = lazy(() => import('../components/FreeQuoteSection'))
const DownloadAppSection = lazy(() =>
  import('../components/DownloadAppSection')
)
const WeMoveAndClean = lazy(() => import('../components/WeMoveAndClean'))
const Footer = lazy(() => import('../components/Footer'))

const HomePage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Animation duration in ms
      once: true, // Only animate once when scrolling down
      easing: 'ease-in-out', // Easing type for animations
    })
  }, [])

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <div data-aos='fade-down'>
          <Navbar />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos='fade-up'>
          <HeroSection />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos='fade-right'>
          <WhyChooseUs />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos='fade-left'>
          <OurTeam />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos='fade-right'>
          <WhatWeRepresent />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos='fade-up'>
          <GeographicCoverage />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos='fade-left'>
          <ClientsWeServe />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos='fade-up'>
          <SmoothMoveBlog />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos='fade-right'>
          <FreeQuoteSection />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos='fade-left'>
          <DownloadAppSection />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos='fade-up'>
          <WeMoveAndClean />
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div data-aos='fade-down'>
          <Footer />
        </div>
      </Suspense>
    </div>
  )
}

export default HomePage
