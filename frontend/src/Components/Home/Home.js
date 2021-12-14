import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Donee/footer"
const Home = () => {
    return (
        <>
               <Navbar/>
        <div className="container home">
            <div className="row padding">
                <div className="col-lg-4 col-sm-12 col-md-4">
                <div className="card">
                <img src="https://images.pexels.com/photos/8042425/pexels-photo-8042425.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Donations</h5>
                        <p className="card-text">all donations are accepted.</p>
                        <a href="/donor/sign" className="btn btn-primary">Donations</a>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div className="card" >
                <img src="https://images.pexels.com/photos/6647111/pexels-photo-6647111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Donors</h5>
                        <p className="card-text">Register as a donor and join the community helping out.</p>
                        <a href="/donor/sign" className="btn btn-primary">Register</a>
                    </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div className="card" >
                <img src="https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Donees</h5>
                        <p className="card-text">Register as a donee and make a donation request.</p>
                        <a href="/donee/sign" className="btn btn-primary">Donee</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    )
}
export default Home;