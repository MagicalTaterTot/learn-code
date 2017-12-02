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
      <div>
        <span className="toggle-button">
          <div className="menu-bar menu-bar-top"></div>
          <div className="menu-bar menu-bar-middle"></div>
          <div className="menu-bar menu-bar-bottom"></div>
        </span>
        <div className="menuWrap exerciseContainer">
          { exerciseArray }
        </div>
      </div>
    )
  }
}
class PythonExercise extends React.Component {
  render() {
    var number = this.props.number
    var url = "/python/" + number
  return (
    <a href={ url } className="exercise menu-item">
      { number }
    </a>
  )
}
}
