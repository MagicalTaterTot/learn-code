import React, { Component } from 'react';

export default class PythonPage extends React.Component {
  render() {
    const exercises = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'python.json')), 'utf8')
    var exerciseArray = []
    var exerciseNum = exercises.exerciseNum
    for (var i = 1; i <= exerciseNum; i++) {
      var exerciseText = exercises.(i.toString()).text
      var output = exercises.(i.toString()).obj
      exerciseArray.push(
        <PythonExercise number = { i }/>
      )
    }
  }
  return (
    <div className="exerciseContainer">
      { exerciseArray }
    </div>
  )
}
class PythonExercise extends React.Component {
  render() {
    var number = parseInt(this.props.number)
  }
  return (
    <div className="exercise">
      { number }
    </div>
  )
}
