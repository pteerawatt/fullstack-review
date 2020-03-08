import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.getTop = this.getTop.bind(this);

  }
  componentDidMount() {
    this.getTop()
  }

  getTop () {
    $.ajax ({
      method: "GET",
      url: "http://localhost:1128/repos",
      success: (res) => {
        console.log(res)
        this.setState({repos: res})
      },
      error: (err) => console.log(err)
    })
  }
  onSearch (userName) {
    // console.log(`${userName} was searched`);
    // TODO
    $.ajax({
      method: "POST",
      url: "http://localhost:1128/repos",
      data: JSON.stringify({userName: userName}),
      contentType: "application/json",
      success: () => {
        this.getTop();
      },
      error: (err) => console.log(err)
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.onSearch.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));