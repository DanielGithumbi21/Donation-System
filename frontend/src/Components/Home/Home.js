import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Donee/footer"
import image from "../../Assets/pexels-ksenia-chernaya-3965534.jpg"

const Home = () => {
    return (
        <>
               <Navbar/>
               <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
          <div className="badges">
        <span class="badge bg-dark">help us to protect and save families and individuals<br/> affected by poverty and cannot be able to meet daily<br/> survival requirements</span>
        </div>
        <div className="left-badges">
        <span className="badge bg-secondary"><h5>Become a</h5></span><br/>
        <span className="badge bg-secondary"><h5>Donor</h5></span>
        </div>
        <h5>Helping Hand</h5>
        <p>Touching people lives.</p>
      </div>
    </div>
  </div>
</div>
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