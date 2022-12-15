// Components
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { getToken } from './constants/token'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducer from './reducers'

// Pages
// import Navbar from "./pages/navbar";
import Frontpage from "./pages/frontpage";

// // Admin
// import Admin from "./pages/admin/admin";
// import Panel from "./pages/admin/panel";
// import Messages from "./pages/admin/messages";
// import MessageDetails from "./pages/admin/message_details";
// import AdminCategories from "./pages/admin/categories";
// import AdminOffers from "./pages/admin/offers";
// import AdminOfferDetails from "./pages/admin/offer_details";


// // Styles
// import './styles/global.scss'
// import './styles/footer.scss'
// import './fontello/css/fontello.css'


let preloadedState
const persistedShopListString = localStorage.getItem('shopList')

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
    const token = localStorage.getItem("token");

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