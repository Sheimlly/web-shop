// Components
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './reducers'

// Pages
// import Navbar from "./pages/navbar";
import Frontpage from "./pages/frontpage";


let preloadedState;
const persistedShopListString = localStorage.getItem('shopList');

if (persistedShopListString) {
  preloadedState = {
    todos: JSON.parse(persistedShopListString)
  }
}

const store = createStore(
    allReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" /*element={<Navbar />}*/>
                    <Route index element={<Frontpage />} />
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Route>
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);