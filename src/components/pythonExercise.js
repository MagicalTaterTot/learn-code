import React, { Component } from 'react';
import AceEditor from 'react-ace';

const json = require('../data/python.json')

export default class PythonExercise extends React.Component {
  function onChange (newValue) {
    console.log('change', newValue)
  }
  render() {
    const id = this.props.match.params.id
    const text = json[exercises][{id}][text]
    const output = json[exercises][{id}][output]
    return (
      <div className="exercisePageContainer">
        <p>{ text }</p>
        <AceEditor
          mode="python"
          theme="solarized_dark"
          height="500px"
          width="700px"
          fontSize=13
        />
      </div>
    );
  };
}
