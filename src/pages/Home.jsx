import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Categories, SortPopup, PizzaBlock } from '../components';

import { setCategory } from '../redux/actions/filters'


const categoriesItems = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]
const filtersItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' },
]



function Home() {
  const dispatch = useDispatch()

  const items = useSelector(({ pizzas }) => pizzas.items)
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  return (
    <div className="container">
      <div className="content__top">

        <Categories
          onClickItem={onSelectCategory}
          items={categoriesItems} />

        <SortPopup
          items={filtersItems} />

      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items &&
          items.map((obj, index) => (
            <PizzaBlock
              {...obj}
              key={obj.id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home