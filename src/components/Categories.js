import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'pie',
                    name: 'Pie'
                },
                {
                    key: 'coffee',
                    name: 'Coffee'
                }
            ],

        }
        
    }
    handleCategoryClick = (key) => {
      this.setState({ activeCategory: key }); // Обновляем активную категорию
      this.props.chooseCategory(key); // Вызываем переданный пропс
  }

  render() {
      return (
          <div className='categories'>
              {this.state.categories.map(el => (
                  <div 
                      key={el.key} 
                      onClick={() => this.handleCategoryClick(el.key)}
                      style={{
                          fontWeight: this.state.activeCategory === el.key ? 'bold' : 'normal',
                          color: this.state.activeCategory === el.key ? '#5e3c20' : '#000',
                          cursor: 'pointer',
                          border: this.state.activeCategory === el.key ? '2px solid #5e3c20' : '1px solid #ddd',
                          borderRadius: '4px',
                          display: 'inline-block'
                      }}
                  >
                      {el.name}
                  </div>
              ))}
          </div>
      )
  }
}

export default Categories