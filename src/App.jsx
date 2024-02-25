import BestCard from "./BestCard/BestCard"
import Header from "./Header/Header"
import Navbar from "./components/Navbar/Navbar"


function App() {
  

  return (
    <>
  

     
      <Navbar></Navbar>
     <div className="max-w-7xl mx-auto">
      <Header></Header>
      <BestCard></BestCard>
     </div>
    </>
  )
}

export default App
