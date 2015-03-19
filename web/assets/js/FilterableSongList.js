(function(React, $, _) {
  "use strict";

  // var SongRow = React.createClass({
  //   render: function() {
  //     return(
  //       <tr>
  //         <td>{this.props.title}</td>
  //         <td>{this.props.author1}</td>
  //         <td>{this.props.author2}</td>
  //       </tr>
  //     );
  //   }
  // });

  // var SongTable = React.createClass({
  //   render: function() {
  //     var rows = [];
  //     this.props.songs.forEach(function(song) {
  //       var filterText = this.props.filterText;
  //       if (filterText !== "" &&
  //           song.Title.indexOf(filterText) === -1 &&
  //           song.Author1.indexOf(filterText) === -1 &&
  //           song.Author2.indexOf(filterText) === -1) {
  //         return;
  //       }
  //       rows.push(<SongRow key={song.id}
  //                          title={song.cell[0]}
  //                          author1={song.cell[1]}
  //                          author2={song.cell[2]} />);
  //     }.bind(this));
  //     return(
  //     <div>
  //       <p>Displaying {rows.length} of {this.props.totalSongs} songs</p>
  //       <table className="table">
  //         <thead>
  //           <tr>
  //             <th>Title</th>
  //             <th>Author 1</th>
  //             <th>Author 2</th>
  //           </tr>
  //         </thead>
  //         <tbody>{rows}</tbody>
  //       </table>
  //     </div>
  //     );
  //   }
  // });

  var Song = React.createClass({displayName: "Song",
    render: function() {
      var songUrl = "/song/" + this.props.songId;
      return (
        React.createElement("div", {className: "col-md-3 song"}, 
          React.createElement("h2", null, React.createElement("a", {href: songUrl}, this.props.title)), 
          React.createElement("h3", null, this.props.author1), 
          React.createElement("h3", null, this.props.author2)
        )
      )
    }
  });

  var SongGroup = React.createClass({displayName: "SongGroup",
    render: function() {
      var filterText = this.props.filterText;
      var songs = _.map(this.props.songs, function(song) {
        if (filterText !== "" &&
            song.cell[0].indexOf(filterText) === -1) {
          return;
        }
        return React.createElement(Song, {key: song.id, 
                     songId: song.id, 
                     title: song.cell[0], 
                     author1: song.cell[1], 
                     authro2: song.cell[2]});
      });

      return (
        React.createElement("div", {className: "row songGroup"}, 
          songs
        )
      );
    }
  });


  var SearchBar = React.createClass({displayName: "SearchBar",
    handleChange: function() {
      this.props.onUserInput(
        this.refs.filterTextInput.getDOMNode().value
      );
    },
    render: function() {
      return(
        React.createElement("form", null, 
          React.createElement("div", {className: "form-group"}, 
            React.createElement("input", {
                type: "text", 
                placeholder: "Search...", 
                ref: "filterTextInput", 
                value: this.props.filterText, 
                onChange: this.handleChange, 
                className: "form-control"}
            )
          )
        )
      );
    }
  });

  var FilterableSongTable = React.createClass({displayName: "FilterableSongTable",
    componentDidMount: function() {
      this.getSongsAndSetState();
    },
    getInitialState: function() {
      return {
        filterText: '',
        songData: []
      };
    },
    getSongsAndSetState: function(filterText) {
      if (filterText === undefined) {
        filterText = "";
      }
      $.ajax({
        url: this.props.url + '?searchText=' + filterText,
        dataType: 'json',
        success: function(data) {
          this.setState({
            songData: data.rows,
            totalSongs: data.records
          });
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    handleUserInput: function(filterText) {
      this.setState({
        filterText: filterText
      });

      // Attempt to avoid hammering the API with requests as someone types.
      _.throttle(_.bind(this.getSongsAndSetState, this, filterText), 300, { leading: false })();
    },
    render: function() {
      return (
        React.createElement("div", null, 
          React.createElement(SearchBar, {filterText: this.state.filterText, 
                     onUserInput: this.handleUserInput}), 
          React.createElement(SongGroup, {songs: this.state.songData, 
                     filterText: this.state.filterText, 
                     totalSongCount: this.state.totalSongs})
        )
      );
    }
  });

  React.render(React.createElement(FilterableSongTable, {url: "/api/songs/search"}), document.getElementById("song-area"));

})(this.React, this.$, this._);
