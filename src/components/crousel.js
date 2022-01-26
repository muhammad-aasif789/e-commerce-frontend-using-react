import React from "react";


class Crousel extends React.Component{
    render(){
        return(
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://www.seekpng.com/png/detail/359-3596260_download-formal-shirts-png-large-image-transparent-shirt.png" height="340" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://www.pngplay.com/wp-content/uploads/2/Dress-Shirt-Background-PNG.png" height="340" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://www.nicepng.com/png/detail/81-814141_t-shirts-lot-large-png-file-free-download.png" height="340" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        )
    }
}


export default Crousel