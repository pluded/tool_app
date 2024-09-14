import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/User/Profile';
import ToolDetails from './pages/ToolDetails';
import Booking from './pages/Booking';
import Messages from './pages/Messages';
import AddTool from './components/Tools/ToolForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tools/add" component={AddTool} />
        <Route path="/tools/:id" component={ToolDetails} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/booking" component={Booking} />
        <Route path="/messages" component={Messages} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
