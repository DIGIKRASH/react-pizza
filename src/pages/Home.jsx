import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, SortPopup, PizzaBlock, LoadingPizzaBlock } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'


const categoriesItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]
const filtersItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
]



function Home() {
  const dispatch = useDispatch()

  const items = useSelector(({ pizzas }) => pizzas.items)
  const cartItems = useSelector(({ cart }) => cart.items)
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])


  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category))
  }, [category, sortBy])


  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }


  return (
    <div className="container">
      <div className="content__top">

        <Categories
          activeCategory={category}
          items={categoriesItems}
          onClickICategory={onSelectCategory}
        />

        <SortPopup
          activeSortType={sortBy.type}
          items={filtersItems}
          onClickSortType={onSelectSortType}
        />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded
            ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                {...obj}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                key={obj.id}
              />
            ))
            : Array(10)
              .fill(0)
              .map((_, index) => <LoadingPizzaBlock key={index} />)
        }
      </div>
    </div>
  )
}

export default Home