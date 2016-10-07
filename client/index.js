import React from 'react'

import ReactDOM from 'react-dom'

import Modalist from '/modalist'

Meteor.startup(() => {
  ReactDOM.render(<div>

    <Modalist
      toggler={onClick => <button onClick={onClick}>modal 1</button>}
      component={() => <div>modal 1</div>}
    />

    <Modalist
      toggler={onClick => <button onClick={onClick}>modal 2</button>}
      component={() => <div>modal 2</div>}
    />

    <br />

    <Modalist
      toggler={onClick => <a href='#' onClick={onClick}>modal 3</a>}
      component={() => <div>modal 3</div>}
    />

  </div>, $('#container')[0])
})
