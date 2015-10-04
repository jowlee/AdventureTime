

var Header = React.createClass({
  getInitialState: function(){
    return {
      name: ""
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var newName = result;
      console.log(newName);
      if (this.isMounted()) {
        this.setState({
          name: newName
        });
      }
    }.bind(this));
  },

  render: function () {
    return <h1>Name: {this.state.name}</h1>;
  }

});

React.render(<Header source = "/api/event/getName" />, document.body);
