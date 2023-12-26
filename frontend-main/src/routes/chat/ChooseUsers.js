import React, { useRef } from 'react';
import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";
const TESTUSERNAME = "kevin";

export class ChooseUsers extends React.Component {
    
    state = { input_value: '' }
    handleInput = e => {
        this.setState({ input_value: e.target.value }, this.doStuff);
    }

    doStuff = e => {
        // this.state.input_value
    }

    send = e => {
        
        // Create DM
        // Load messages
        var socket = socketClient(SERVER);
        socket.emit("dm", TESTUSERNAME, this.state.input_value);
        alert(TESTUSERNAME + " " + this.state.input_value);
        //window.location.reload(false);
    }

    render() {
        var test_users = ["Christian", "Madja", "Bobliu"];
        test_users.sort(); 
        let list = test_users.map(m => <option value={m} />);
        return (
            <div className="choose-users">
                <label className="labeltext"> Add DM: </label>
                <input type="text" list="users" onChange={this.handleInput} onFocus={this.showDropdown} value={this.state.input_value} />
                <datalist id="users">
                    {list}
                </datalist>
                <button onClick={this.send}>
                    Chat
                </button>
            </div>
        )
    }
}