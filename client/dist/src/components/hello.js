/*
Creating a component
The most simple component has a `render` method that returns some
JSX. `props` are attributes that are passed into the component
when you instantiate it.
One caveat is that `render` must return a single parent element;
you can't return multiple adjacent JSX tags but must wrap them
in one parent element.
*/

var HelloMessage = React.createClass({displayName: "HelloMessage",
  render: function () {
    return React.createElement("h1", null, "Hello ", this.props.message, "!");
  }
});

React.render(React.createElement(HelloMessage, {message: "askdjf;lkdsaf;a"}), document.body);
