import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    contents: [],
    content: {
      username: "username",
      content: "content",
      date: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }
  }

componentDidMount() {
  this.getContents();
}

getContents = _ => {
  fetch('http://localhost:4000/posts')
  .then(response => response.json())
  .then(response => this.setState({ contents: response.data }))
  .catch(err => console.error(err))
}

addContent = _ => {
  const { content } = this.state;
  fetch(`http://localhost:4000/posts/add?username=${content.username}&content=${content.content}`)
  .then(this.getContents)
  .catch(err => console.error(err))
}

renderContent = ({ id, content }) => <div key={id}>{content}</div>

  render() {
    const { contents, content } = this.state;
    return (
      <div className="App">
        {contents.map(this.renderContent)}

        <div>
          <input 
            value={content.username}
            onChange={e => this.setState({ content: {...content, username: e.target.value}})}/>
          <input 
            value={content.content}
            onChange={e => this.setState({ content: {...content, content: e.target.value}})}/>
          <button onClick={e => this.addContent()}>Add content</button>
        </div>
      </div>
    );
  }
}

export default App;
