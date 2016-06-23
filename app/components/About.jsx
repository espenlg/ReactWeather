var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center'>About</h1>
      <p>This is my first React app as a part of <a href='https://www.udemy.com/the-complete-react-web-app-developer-course' target='_new'>The Complete React Web App Developer Course</a> course at Udemy.com.</p>
      <p>You'll find the source on <a href='https://github.com/espenlg/ReactWeather' target='_new'>GitHub</a>.</p>
    </div>
  )
};

module.exports = About;
