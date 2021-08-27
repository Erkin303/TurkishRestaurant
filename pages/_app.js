import All from '../component/all'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import store from '../redux/state'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
     <All>
      <Component {...pageProps} />
      </All>
   </Provider>
  
}

export default MyApp
