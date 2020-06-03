const containerGenerate = require('./container/index')
const componentGenerate = require('./component/index')
const mockGenerate = require('./mock/index')

module.exports = (plop) => {
  plop.setGenerator('container', containerGenerate)
  plop.setGenerator('component', componentGenerate)
  plop.setGenerator('mock', mockGenerate)
}
