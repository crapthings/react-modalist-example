import React from 'react'

import { composeWithTracker as Container } from 'react-komposer'

import Modalist from '/modalist'

const Form = (post) => <form>
  <input type='text' defaultValue={post.title} />
  <textarea rows='5' defaultValue={post.content}></textarea>
</form>

const comp = ({ posts }) => <table>
  <thead>
    <tr>
      <th>no.</th>
      <th>title</th>
    </tr>
  </thead>
  <tbody>
    {posts.map((post, idx) => <tr key={post._id}>
      <td>{idx + 1}</td>
      <td>{post.title}</td>
      <td width='200'>
        <Modalist
          toggler={onClick => <a href='#' onClick={onClick}>edit</a>}
          component={() => <Form {...post} />}
          title={post.title}
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
