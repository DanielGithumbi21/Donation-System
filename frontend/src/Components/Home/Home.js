import "./Home.css"
import Navbar from "../Navbar/Navbar"
const Home = () => {
    return (
        <>
               <Navbar/>
        <div className="container home">
            <h4 className="mb-4">Helping Hand</h4>
            <h6 className="mb-4">Make an Impact in Someone's Life Today</h6>
            <button className="btn btn-outline-info">See Donation Menu</button>
        </div>
        </>

    )
}
export default Home;