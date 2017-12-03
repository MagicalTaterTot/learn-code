import React, { Component } from 'react';
import AceReact from 'react-ace';
import brace from 'brace';

import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';

const json = require('../data/javascript.json')

export default class JSExercise extends React.Component {
  render() {
    var evaluated = ""
    const exercises = json
    const id = parseInt(this.props.match.params.id)
    const text = exercises.exercises[id].text
    const def = exercises.exercises[id].def

    return (
      <div className="exercisePageContainer">
        <p className="exerciseText">{ text }</p>
        <AceReact
          mode="javascript"
          theme="solarized_dark"
          value={def}
        />
      </div>
    );
  };
}
