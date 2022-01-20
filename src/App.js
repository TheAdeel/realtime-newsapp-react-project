import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import NewsItems from './components/NewsItems';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NotFound404 from './components/NotFound404';

class App extends Component{
  state = {
    progress: 0,
    query: ""
  }
  updateQuery = (q) =>{
    this.setState({ query: q });
  }
  apiKey = process.env.REACT_APP_API_KEY.replaceAll('"', '').replaceAll(';', '');
  
  changeProgress = (progress)=> {
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
        <Router>
        <LoadingBar color='#198754' transitionTime={0} height={3} progress={this.state.progress} shadow={false}/>
          <Navbar updateQuery={this.updateQuery}/>
          <Routes>
            <Route exact path="/" element={<NewsItems apiKey={this.apiKey} query={null} progress={this.changeProgress} key={"general"} category="general" />} />
            <Route exact path="/category/sports" element={<NewsItems apiKey={this.apiKey} query={null} progress={this.changeProgress} key={"sports"} category="sports" />} />
            <Route exact path="/category/business" element={<NewsItems apiKey={this.apiKey} query={null} progress={this.changeProgress} key={"business"} category="business" />} />
            <Route exact path="/category/entertainment" element={<NewsItems apiKey={this.apiKey} query={null} progress={this.changeProgress} key={"entertainment"} category="entertainment" />} />
            <Route exact path="/category/health" element={<NewsItems apiKey={this.apiKey} query={null} progress={this.changeProgress} key={"health"} category="health" />} />
            <Route exact path="/category/science" element={<NewsItems apiKey={this.apiKey} query={null} progress={this.changeProgress} key={"science"} category="science" />} />
            <Route exact path="/category/technology" element={<NewsItems apiKey={this.apiKey} query={null} progress={this.changeProgress} key={"technology"} category="technology" />} />
            <Route exact path={`/${this.state.query}`} element={<NewsItems apiKey={this.apiKey} query={this.state.query} progress={this.changeProgress} key={this.state.query} category="technology" />} />
            <Route path="*" element={<NotFound404 />}/>
          </Routes>
      </Router>
      </>
    );
  }
}

export default App;
