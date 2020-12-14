import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route exact path ='/' component = {StreamList}/>
        <Route path ='/streams/new' component = {StreamCreate}/>
        <Route path ='/streams/edit' component = {StreamEdit}/>
        <Route path ='/streams/delete' component = {StreamDelete}/>
        <Route path ='/streams/show' component = {StreamShow}/>
      </BrowserRouter>
    </div>
  );
}

export default App;