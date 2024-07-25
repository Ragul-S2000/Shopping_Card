import React from 'react'
import Nav from './components/Nav'
import Title from './components/Title'
import Cards from './components/Cards'
import Footer from './components/Footer'
import { useState } from 'react'
import Mycontext from './components/Mycontext'

const App = () => {
  let [count, setcount] = useState(0);
  const products = [
    {
      id: 1,
      name: "Fancy Product",
      img: "https://tse4.mm.bing.net/th?id=OIP.pGgeuin4a8LylL9FNZumjQAAAA&pid=Api&P=0&h=180",
      MRP: "",
      SalesPrice: "$40.00-$180.00",
      rating: false,
      isIclude: false
    },
    {
      id: 2,
      name: "Special Item",
      img: "https://tse4.mm.bing.net/th?id=OIP.pGgeuin4a8LylL9FNZumjQAAAA&pid=Api&P=0&h=180",
      MRP: "$20.00",
      SalesPrice: "$18.00",
      rating: true,
      isIclude: true
    },
    {
      id: 3,
      name: "Sale Item",
      img: "https://tse4.mm.bing.net/th?id=OIP.pGgeuin4a8LylL9FNZumjQAAAA&pid=Api&P=0&h=180",
      MRP: "$50.00",
      SalesPrice: "$25.00",
      rating: false,
      isInclude: true
    },
    {
      id: 4,
      name: "Popular Item",
      img: "https://tse4.mm.bing.net/th?id=OIP.pGgeuin4a8LylL9FNZumjQAAAA&pid=Api&P=0&h=180",
      MRP: "",
      SalesPrice: "$40.00",
      rating: true,
      isInclude: false
    },
    {
      id: 5,
      name: "Sale Item",
      img: "https://tse4.mm.bing.net/th?id=OIP.pGgeuin4a8LylL9FNZumjQAAAA&pid=Api&P=0&h=180",
      MRP: "$50.00",
      SalesPrice: "$25.00",
      rating: false,
      isInclude: true
    },
    {
      id: 6,
      name: "Fancy Product",
      img: "https://tse4.mm.bing.net/th?id=OIP.pGgeuin4a8LylL9FNZumjQAAAA&pid=Api&P=0&h=180",
      MRP: "",
      SalesPrice: "$120.00-$280.00",
      rating: false,
      isInclude: false
    },
    {
      id: 7,
      name: "Special Item",
      img: "https://tse4.mm.bing.net/th?id=OIP.pGgeuin4a8LylL9FNZumjQAAAA&pid=Api&P=0&h=180",
      MRP: "$20.00",
      SalesPrice: "$18.00",
      rating: true,
      isInclude: true
    },
    {
      id: 8,
      name: "Popular Item",
      img: "https://tse4.mm.bing.net/th?id=OIP.pGgeuin4a8LylL9FNZumjQAAAA&pid=Api&P=0&h=180",
      MRP: "",
      SalesPrice: "$40.00",
      rating: true,
      isInclude: false
    }
  ];
  return (
    <Mycontext.Provider value={{ count, setcount }}>
      <>
        <Nav />
        <Title />
        <div className="container-fluid text-center">
          <div className="row gx-0 justify-content-evenly   my-3">
            {products.map((product, ind) => <Cards product={product} key={ind} />)}
          </div >
        </div >
        <Footer />
      </>
    </Mycontext.Provider>
  )
}

export default App