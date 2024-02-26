import BestCard from "./BestCard/BestCard"
import Header from "./Header/Header"
import Navbar from "./components/Navbar/Navbar"
import RelatedDeal from "./components/RelatedDeal/RelatedDeal"


function App() {
  

  return (
    <>
  

     
      <Navbar></Navbar>
     <div className="max-w-5xl mx-auto">
      <Header></Header>
      <BestCard></BestCard>
      <RelatedDeal></RelatedDeal>
     </div>
    </>
  )
}

export default App
