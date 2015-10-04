/*
Creating a component
The most simple component has a `render` method that returns some
JSX. `props` are attributes that are passed into the component
when you instantiate it.
One caveat is that `render` must return a single parent element;
you can't return multiple adjacent JSX tags but must wrap them
in one parent element.
*/

var HelloMessage = React.createClass({
  render: function () {
    return <h1>Hello {this.props.message}!</h1>;
  }
});

React.render(<HelloMessage message="askdjf;lkdsaf;a" />, document.body);
