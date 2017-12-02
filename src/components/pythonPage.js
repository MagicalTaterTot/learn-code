import React, { Component } from 'react';

export default class PythonPage extends React.Component {
  render() {
    const exercises = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'python.json')), 'utf8')
    
  }
}
class PythonExercise extends React.Component {
  render() {
    var number = parseInt(this.props.number)
  }
}
