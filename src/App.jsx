import BestCard from "./BestCard/BestCard"
import Header from "./Header/Header"
import Navbar from "./components/Navbar/Navbar"
import RelatedDeal from "./components/RelatedDeal/RelatedDeal"
import SignDeal from "./components/SignDeal/SignDeal"


function App() {
  

  return (
    <>
  

     
      <Navbar></Navbar>
     <div className="max-w-5xl mx-auto">
      <Header></Header>
      <BestCard></BestCard>
      <RelatedDeal></RelatedDeal>
      <SignDeal></SignDeal>
     </div>
    </>
  )
}

export default App
