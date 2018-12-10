var TaskApp = React.createClass({

    getInitialState:function(){
        return{

            items:[],
            task:''
        };

    },

    addTask:function(e){

        this.setState({

            items: this.state.items.concat([this.state.task]),
            task:''
        });

        e.preventDefault();

    },
    onChange:function(e){

        this.setState({task:e.target.value});

    },
    removeTask: function(item) {
        var items = this.state.items;
        delete items[item];

        this.setState({ items });

    },

    render:function(){


        return (
            <div>
                <h1>My Tasks</h1>

                <TaskList items={this.state.items} deleteClickHandlers={this.removeTask} />

                <form onSubmit={this.addTask}>

                    <input onChange={this.onChange} value={this.state.task}/>
                    <button>Add Task</button>
                </form>

            </div>
        );
    }
});

React.render(<TaskApp />, document.body);