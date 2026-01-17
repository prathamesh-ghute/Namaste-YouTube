
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
{/* 
  Head
  Body Sidebar 
      MenuItems
  MainContainer
      ButtonList
      VideoContainer
          videoCard

*/}
        <Head/>
        {/* <Body/> */}
        <RouterProvider router={appRouter} />


    </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:[
    {
      path:"/",
     element:<MainContainer/>
    },
    {
      path:"/:watch",
     element:<WatchPage/>
    },
    

  ]
}])

export default App;
