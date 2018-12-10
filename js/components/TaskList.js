var TaskList = React.createClass({

    render: function() {

        var displayTask=(task,fuc)=> <li onClick={this.props.deleteClickHandlers.bind(this, fuc)}>{task}</li>;
        return (
            <ul>
               { this.props.items.map(displayTask) }
            </ul>
        );
    }
});

