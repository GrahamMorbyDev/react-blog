import Navbar from './NavBar';
import Home from './Home';
import Create from './CreateBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
