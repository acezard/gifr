import raf from './raf'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// RAF polyfill
global.requestAnimationFrame = callback => setTimeout(callback, 0)

Enzyme.configure({ adapter: new Adapter() })
