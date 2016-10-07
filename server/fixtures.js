import _ from 'lodash'

import faker from 'faker'

Posts.remove({})

Meteor.startup(feed)

function feed() {
  _.times(10, () => Posts.insert({
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
  }))
}
