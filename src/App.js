import React from 'react'
import Loading from './components/Loading';
import Products from './components/Products';
import './App.css';

class App extends React.Component{
  state = {
    loading: false,
    products: [
      {
        id: 1,
        name: 'Milk',
        product_number: 123,
        price: 2.5
      },
      {
        id: 2,
        name: 'Egg',
        product_number: 234,
        price: 3
      },
      {
        id: 3,
        name: 'Sugar',
        product_number: 345,
        price: 1
      },
  ]
  }

  render() {
    const {loading, products} = this.state


    if (loading) {
      return <Loading />
    } else {
      return (
        <div className="App">
          <Products products={products}/>
        </div>
      )
    }
  }

}

export default App;
