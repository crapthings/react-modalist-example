import React from 'react'

import ReactDOM from 'react-dom'

import Modalist from '/modalist'

import Posts from './posts'

Meteor.startup(() => {
  ReactDOM.render(<div>

    <Modalist
      toggler={onClick => <button onClick={onClick}>modal 1</button>}
      component={() => <div>modal 1</div>}
      title='wow we can custom title'
    />

    <Modalist
      toggler={onClick => <button onClick={onClick}>modal 2</button>}
      component={() => <div>modal 2</div>}
    />

    <br /> <br /> <br />

    <Modalist
      toggler={onClick => <a href='#' onClick={onClick}>nested modal</a>}
      component={() => <Posts />}
    />

    <Posts />

  </div>, $('#container')[0])
})

