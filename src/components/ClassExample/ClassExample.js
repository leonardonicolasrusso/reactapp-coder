import { Component } from 'react' 

class ClassExample extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
  
    render() {
      return (
        <div>
          <p>clickeaste {this.state.count} veces</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Clickeame
          </button>
        </div>
      );
    }
  }

  export default ClassExample