import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { List, ListItem } from '@material-ui/core'

import {changeCat, getCategories } from '../../store/categories.js'

const Categories = props => {

  useEffect(() => {
    props.getCategories();
  }, []);

  let catArr = props.categories.categories;
  
  return (
    <>
      <div>
        <section>
          <h3>Browse Categories</h3>
          <List>
            {catArr.map((cat, idx) => {
              return (
                <ListItem key={idx} 
                onClick={() => props.changeCat(cat)}>
                  {cat.displayName}
                </ListItem>
              )
            })}
          </List>
        </section>

      </div>

    </>

  )
}


const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = {changeCat, getCategories}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories)