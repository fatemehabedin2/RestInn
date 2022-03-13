import image1 from "../assets/img/Abbasi.jpg"
import image2 from "../assets/img/Darvishi.jpg"
import image3 from "../assets/img/dariush.jpg"


const Hero = () => {

  return (

    <section >
      <div >
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={image1} className="d-block w-100 " alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Abbasi Hotel</h5>
                  <p>Isfahan, Iran</p>
                </div>
            </div>
            <div className="carousel-item ">
              <img src={image2} className="d-block w-100 " alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Darvishi Hotel</h5>
                  <p>Mashhad, Iran</p>
                </div>
            </div>
            <div className="carousel-item ">
              <img src={image3} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Dariush Hotel</h5>
                  <p>Kish, Iran</p>
                </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
);}

export default Hero

