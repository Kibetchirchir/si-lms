import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
export default class HeaderAppBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 1,open:false};
    }
    handleChange = (event, index, value) => this.setState({value});
    onLeftIconButtonClick = (event, index, value) => {
        console.log('hi;');
        this.setState({open: !this.state.open});
    }
    render() {
        return (
            <div>
            <Drawer  open={this.state.open} >
            <MenuItem> <a href="/">Home </a></MenuItem>
        <MenuItem> <a href="/parcel">create parcel </a></MenuItem>
        <MenuItem> <a href="/parcels">all parcels </a></MenuItem>
        </Drawer>
        <AppBar
        title="Send-IT"
        iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonClick={this.onLeftIconButtonClick}>
            </AppBar>
            </div>
    );
    };
}
