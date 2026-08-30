import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const HomePage = () => {
  return (
    <>
    <Header firstName='yoni' lastName='eifer'/>
    <Sidebar/>
    <div>HomePage</div>
    <div>home content</div>
    <Footer/>
    </>
  )
}

export default HomePage