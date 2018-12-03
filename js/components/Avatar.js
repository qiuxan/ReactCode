var Avatar=React.createClass({

    getDefaultProps:function(){

        return{path: "https://images-na.ssl-images-amazon.com/images/G/35/x-site/events/2018/xmas/gateway/gw_bubbler_xmas_gifting_women_200x200._CB478395218_.jpg"};
    },

    render:function () {
        return (
            <div>
                <a href={this.props.path}>

                    <img src={this.props.path} />
                </a>

            </div>

        );
    }

});


React.render(<Avatar />, document.body);