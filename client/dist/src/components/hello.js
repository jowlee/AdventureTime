

var Header = React.createClass({displayName: "Header",
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
    return React.createElement("h1", null, "Name: ", this.state.name);
  }

});

React.render(React.createElement(Header, {source: "/api/event/getName"}), document.body);
