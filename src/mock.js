var Mock = require('mockjs')
// var Random = Mock.Random
Mock.mock('/headerlist',{
  'list|1-10': [{
    'id|+1': 1,
    'city': '@CITY'
  }]
})