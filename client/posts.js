import React from 'react'

import { composeWithTracker as Container } from 'react-komposer'

import Modalist from '/modalist'

const Form = (post) => <form>
  <input type='text' defaultValue={post.title} />
  <textarea rows='5' defaultValue={post.content}></textarea>
</form>

const comp = ({ posts }) => <table>
  <tbody>
    {posts.map((d, idx) => <tr key={d._id}>
      <td>{idx + 1}</td>
      <td>{d.title}</td>
      <td width='200'>
        <Modalist
          toggler={onClick => <a href='#' onClick={onClick}>edit</a>}
          component={() => <Form {...d} />}
          title={d.title}
        />
      </td>
    </tr>)}
  </tbody>
</table>

function tracker(props, onData) {
  const posts = Posts.find().fetch()
  onData(null, { posts })
}

export default Container(tracker)(comp)
