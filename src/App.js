// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cookie from './components/Cookie';
import Home from './pages/Home';
import JobListings from './pages/JobListings'



function App() {
  let history = useHistory()
  return (
    <BrowserRouter history={history}>
      <Navbar />
      <Switch>
        <Route exact path='/' render={props => <Home {...props} />} />
        <Route exact path='/job-listings' render={props => <JobListings {...props} />} />
        {/* <Route exact path='/job-applications' render={props => <JobApplications {...props} />} />
        <Route exact path='/search' render={props => <Search {...props} />} />
        <Route exact path='/notifications' render={props => <Notifications {...props} />} />
        <Route exact path='/saved-jobs' render={props => <SavedJobs {...props} />} />
        <Route exact path='/profile' render={props => <Profile {...props} />} />
        <Route exact path='/login' render={props => <Login {...props} />} />
        <Route exact path='/register' render={props => <Register {...props} />} /> */}
      </Switch>
      <Cookie />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
// function App() {
//   let history = useHistory()
//   return (
//   <>
//     <BrowserRouter history={history}>
//       <Navbar />
//       <Switch>
//         {/* <Route exact path='/' render={props => <Home {...props} />} /> */}
//         <Route exact path='/' render={props => <Home {...props} />} />
//         <Route exact path='/job-listings' render={props => <JobListings {...props} />} />
//       </Switch>
//       <Cookie />
//       <Footer />
//     </BrowserRouter>
//   </>
//   );
// }

// export default App;
