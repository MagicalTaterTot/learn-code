import React, { Component } from 'react';

var json = require('../data/python.json');

export default class PythonPage extends React.Component {
  render() {
    const exercises = json
    var exerciseArray = []
    var exerciseNum = exercises.exerciseNum
    for (var i = 1; i <= exerciseNum; i++) {
      exerciseArray.push(
        <PythonExercise number = { i }/>
      )
    }
    return (
      <div className="exerciseContainer">
        { exerciseArray }
      </div>
    )
  }
}
class PythonExercise extends React.Component {
  render() {
    var number = parseInt(this.props.number)
  return (
    <div className="exercise">
      { number }
    </div>
  )
}
}
