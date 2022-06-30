import React from 'react'
import PropTypes from 'prop-types'


const Categories = React.memo(
  function Categories({ activeCategory, items, onClickICategory }) {

    return (
      <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => onClickICategory(null)}
          >Все</li>
          {items &&
            items.map((name, index) =>
              <li
                className={activeCategory === index ? 'active' : ''}
                onClick={() => onClickICategory(index)} key={`${name}_${index}`}
              >{name}</li>
            )}
        </ul>
      </div>
    )
  }
)


Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number.isRequired, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickICategory: PropTypes.func.isRequired,
}

Categories.defaultProps = {
  activeCategory: null,
  items: [],
}

export default Categories

