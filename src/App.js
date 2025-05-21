import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import Search from "./components/Search";

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    orders: [],
    currentItems: [],
    items: [
      {
        id: 1,
        title: 'Cappuccino',
        img: 'capuchino.png',
        desc: 'Cappuccino: Airy, milky, classic comfort.',
        category: 'coffee',
        price: '5.49'
      },
      {
        id: 2,
        title: 'Americano',
        img: 'americano.png',
        desc: 'Americano: Invigorating, clean, for coffee connoisseurs.',
        category: 'coffee',
        price: '4.49'
      },
      {
        id: 3,
        title: 'Espresso',
        img: 'espresso.png',
        desc: 'Espresso: Strong, aromatic, coffee energy.',
        category: 'coffee',
        price: '2.99'
      },
      {
        id: 4,
        title: 'Flat white',
        img: 'flat white.png',
        desc: 'Flat white: Silky, rich, coffee accent.',
        category: 'coffee',
        price: '6.99'
      },
      {
        id: 5,
        title: 'Raf',
        img: 'raf.png',
        desc: 'Raf: Creamy, sweet, dessert in a cup.',
        category: 'coffee',
        price: '7.29'
      },
      {
        id: 6,
        title: 'Apple pie',
        img: 'apple pie.png',
        desc: 'Apple pie: Home comfort, apple sweetness.',
        category: 'pie',
        price: '3.39'
      },
      {
        id: 7,
        title: 'Eclair',
        img: 'ecler.png',
        desc: 'Eclair: Delicate, custard, chocolate delight.',
        category: 'pie',
        price: '4.79'
      },
      {
        id: 8,
        title: 'Strawberry tartlet',
        img: 'tartaletka.png',
        desc: 'Strawberry tartlet: Fresh berries, crispy base.',
        category: 'pie',
        price: '7.49'
      },
      {
        id: 9,
        title: 'Tiramisu',
        img: 'tiramisu.png',
        desc: 'Tiramisu: Italian classic, coffee tenderness.',
        category: 'pie',
        price: '8.39'
      },
    ],
    showFullItem: false,
    sullItem: {}
  }
  this.state.currentItems = this.state.items
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
  this.chooseCategory = this.chooseCategory.bind(this)
  this.onShowItem = this.onShowItem.bind(this)
  this.handleSearch = this.handleSearch.bind(this); // Новый метод
}
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Search onSearch={this.handleSearch} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items 
          onShowItem={this.onShowItem} 
          items={this.state.currentItems} 
          onAdd={this.addToOrder} 
        />
        {this.state.showFullItem && (
          <ShowFullItem 
            onAdd={this.addToOrder} 
            onShowItem={this.onShowItem} 
            item={this.state.fullItem} 
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

 

  // Модифицируем метод chooseCategory для учета поиска
  handleSearch(term) {
    this.setState({ searchTerm: term.toLowerCase() });
    
    if (term === '') {
      this.setState({ currentItems: this.state.items });
      return;
    }

    const filteredItems = this.state.items.filter(item => 
      item.title.toLowerCase().includes(term) || 
      item.desc.toLowerCase().includes(term)
    );

    this.setState({ currentItems: filteredItems });
  }

  chooseCategory(category) {
    let filteredItems = this.state.items;
    
    if (this.state.searchTerm) {
      filteredItems = filteredItems.filter(item => 
        item.title.toLowerCase().includes(this.state.searchTerm) || 
        item.desc.toLowerCase().includes(this.state.searchTerm)
      );
    }
    
    if (category !== 'all') {
      filteredItems = filteredItems.filter(el => el.category === category);
    }
    
    this.setState({ currentItems: filteredItems });
  }

  deleteOrder(id){
     this.setState({orders: this.state.orders.filter(el => el.id !== id )})
  }

  addToOrder(item) {
    let isInArray = false
this.state.orders.forEach(el => {
  if(el.id === item.id)
  isInArray = true
})
if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
