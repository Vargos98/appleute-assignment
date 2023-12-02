import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'



export default function Home() {
  const [search, setSearch] = useState('')
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      }
    });

    //converting response data to json()
    response = await response.json();


    // once data fetched we set the data provided by the callback function in the useState()
    setFoodItem(response[0]);
    setFoodCat(response[1]);


    //to check are we getting data or not ?
    // console.log(response[0],response[1]);
  }
  // useEffect to call the func to loadData everytime when something is changed.
  useEffect(() => {
    loadData()
  }, []);

  // ,[] added dependency list so that useEffect doesnt reload data for every re-render.




  return (
    <div >
      <div> <Navbar />     </div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner" id="carousel">
            <div className='carousel-caption' style={{ "zIndex": "10" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }} />
                {/* <button className="btn btn-outline-dark text-white bg-warning" type="submit">Search</button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/600x400/?burger" className="d-block w-100 h-50" style={{ filter: "brightness(30%)" }} alt="burger" />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/600x400/?pizza" className="d-block w-100 h-50" style={{ filter: "brightness(30%)" }} alt="pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/600x400/?pasta" className="d-block w-100 h-50" style={{ filter: "brightness(30%)" }} alt="pasta" />
            </div>
            <div className="carousel-item active" >
              <img src="https://source.unsplash.com/random/600x400/?biryani" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
            <div className="carousel-item active" >
              <img src="https://source.unsplash.com/random/600x400/?curry" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          {/* Added corousel back to Home.jsx as it is a single component and as react guidelines says every repeated code should be made as a sperate component */}
        </div>
      </div>
      <div className='container'> {/* boootstrap is mobile first */}
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (
                // justify-content-center
                <div className='row mb-3'>
                  <div key={data.id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                  {foodItem !== [] ? foodItem.filter(
                    (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                          {/* {console.log(filterItems.url)} */}
                          <Card foodItem={filterItems}
                            // desc={filterItems.description} 
                            options={filterItems.options[0]}
                            
                          ></Card>
                        </div>
                      )
                    }) : <div> No Such Data </div>}
                </div>
              )

            }) : ""
        }




      </div>
      <div> <Footer />     </div>
    </div>
  )
}
