import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import DynamicHooksCounter from './components/DynamicHooksCounter'
import HooksCounter from './components/HooksCounter'

function App() {

  return (
    <>
    <Provider store={store}>

       {/* <Counter/> */}
       <HooksCounter id={1}/>
       <DynamicHooksCounter/>
      </Provider>
    </>
  )
}

export default App
