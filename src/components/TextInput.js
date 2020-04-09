import React from 'react';

class TextInput extends React.Component {
  state = {
    value: '',
  }

  saveText = (event) => {
   this.setState({value: event.target.value});

 }

  render() {
    console.log(this.state.value)
    return (
      <form>
        <input type="text" value={this.state.value} onChange={this.saveText} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TextInput;
