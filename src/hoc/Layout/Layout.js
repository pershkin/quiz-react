import React from 'react'
import classes from './Layout.css'

function Layout(props) {

  return (
    <div className={classes.Layout}>
      <main>
        { props.children }
      </main> 
    </div> 
     )
}

export default Layout