import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'


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
      <div> <Carousel />   </div>
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
                          {console.log(filterItems.url)}
                          <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
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
