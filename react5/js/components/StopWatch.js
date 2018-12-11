var StopWatch = React.createClass({

    getInitialState: function() {
        return{
            time:0,
            until:'',
            disabled:false
        };
    },
    type:function(e){
      this.setState({until:e.target.value});
    },
    start:function(){

        // React.findDOMNode(this.refs.button).disabled=true;
        this.setState({disabled:true});
        this.interval=setInterval(()=> {
            this.tick();

            if(this.isTimeup()){

                this.finish();
            }

        },1000);

    },
    isTimeup:function(){
        return this.state.time==this.state.until;
    },

    finish:function(){

        this.setState({time:0,until:''});
        // alert('times up');
       React.findDOMNode(this.refs.input).focus();
        // React.findDOMNode(this.refs.button).disabled=false;
        this.setState({disabled:false});
        return clearInterval(this.interval);

    },

    tick:function(){

        this.setState({time:this.state.time+1});
    },

    render:function(){
        return (
            <div>
                <input ref="input" onChange={this.type} value={this.state.until}/>


                <button disabled={this.state.disabled} ref="button" onClick={this.start}>Go</button>
                <h1>{this.state.time}</h1>

            </div>
        );
    }
});

React.render(<StopWatch />, document.body);