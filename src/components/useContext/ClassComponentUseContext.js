import React from 'react';
//Import first
import { ThemesProvide } from './Usecontext.js';
export default class Classcomponentusecontext extends React.Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? 'red' : 'yellow',
      color: dark ? 'blue' : 'black',
      width: '250px',
      height: '100px',
    };
  }
  render() {
    return (
      <ThemesProvide.Consumer>
        {/* This is a callback function */}
        {(darkTheme) => {
          console.log('the darkTheme is ' + darkTheme);
          return (
            <div style={this.themeStyles(darkTheme)}>
              <h2>class</h2>
            </div>
          );
        }}
      </ThemesProvide.Consumer>
    );
  }
}
