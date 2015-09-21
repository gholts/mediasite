var React = require('../vendor/react.min.js');

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.getDOMNode().value
    );
  },
  render: function() {
    return(
      <form>
        <div className="form-group">
          <input
              type="text"
              placeholder="Search..."
              ref="filterTextInput"
              value={this.props.filterText}
              onChange={this.handleChange}
              className="form-control"
          />
        </div>
      </form>
    );
  }
});

module.exports = SearchBar;
