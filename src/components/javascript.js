import React, { Component } from 'react';

var json = require('../data/javascript.json');

export default class JSPage extends React.Component {
  render() {
    const exercises = json
    var exerciseArray = []
    var exerciseNum = exercises.exerciseNum
    for (var i = 1; i <= exerciseNum; i++) {
      exerciseArray.push(
        <JSExercise number = { i }/>
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
        <div id="desc">Javascript is a high level programming language that is one of the three backbones of modern web development, alongside HTML and CSS</div>
      </div>
    )
  }
}
class JSExercise extends React.Component {
  render() {
    var number = this.props.number
    var url = "/js/" + number
  return (
    <a href={ url } className="exercise menu-item">
      { number }
    </a>
  )
}
}
