import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import Gallery from '@/pages/Gallery'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/painter-demo/" element={<Home />} />
            <Route path="/painter-demo/services" element={<Services />} />
            <Route path="/painter-demo/gallery" element={<Gallery />} />
            <Route path="/painter-demo/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
