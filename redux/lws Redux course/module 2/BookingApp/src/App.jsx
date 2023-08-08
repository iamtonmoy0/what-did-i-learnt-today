
import { Provider } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import Book from './components/Book'
import store from './redux/store'

function App() {

  return (
    <>
    <Provider store={store}>

    <Header/>
    <Input/>
      <Book/>
    </Provider>
    </>
  )
}

export default App
