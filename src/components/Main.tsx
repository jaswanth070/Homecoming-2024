import Navbar from './Navbar';
import Header from './Header'
import Events from "./Events"
import Gallery from './Gallery'

import Gallerymain from './Gallerymain';
import Video from './Video';
import Merch from './Merch';
import Guidelines from './Guidelines';
import Footer from './Footer';

export default function Main() {
  return (
    <div>
      <Navbar />
      <Video />
      <Header />
      <Events />
      <Gallerymain />
      <Gallery />
      < Merch />
      <Guidelines />
      
      <Footer/>
    </div>
  )
}
