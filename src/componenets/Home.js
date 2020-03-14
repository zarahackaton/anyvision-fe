import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/icons/Link';
import {toast} from "react-toastify";
import * as rtspApi from "../apiRoutes/RTSP";

class Home extends Component {
    constructor(props) {
        super(props);

        this.rtspUrl = React.createRef();
    }

    insertUrl = async (e) => {
        e.preventDefault();
        try {
            const result = await rtspApi.insertUserUrl(this.rtspUrl.current.value);
            toast.success(result.data.message);
            this.props.history.push('/rtsp');
        }
        catch (error) {
            toast.error(error.response.data.message);
        }
    };

    render() {
        return (
            <form className="d-inline-block m-5" onSubmit={this.insertUrl}>
                <h1>Apply Links</h1>
                <p className="h6 mt-3">RTSP Link</p>
                <TextField inputRef={this.rtspUrl}
                           variant="outlined"
                           fullWidth
                           required
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <Link/>
                                   </InputAdornment>
                               )
                           }}/>
                <div>
                    <Button className="mt-4" type="submit" size="large" variant="contained">Submit</Button>
                </div>
            </form>
        );
    }
}

export default Home;