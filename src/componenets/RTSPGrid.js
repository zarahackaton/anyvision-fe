import React, {Component} from "react";
import * as RTSP from '../apiRoutes/RTSP';

class RTSPGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rtspUrls: []
        };
    }

    showUrl = (item, index) => {
        //TODO: RESEARCH WHAT TO DO HERE
        return (
            <div key={index}>
                <a href={item.url}>{item.url}</a>
            </div>
        );
    };

    async componentDidMount() {
        const urls = await RTSP.getUserUrls();
        this.setState({rtspUrls: urls.data.result});
    }

    render() {
        return (
            this.state.rtspUrls.length > 0 &&
            <div className="mt-5">
                <h1>RTSP Links</h1>
                {this.state.rtspUrls.map(this.showUrl)}
            </div>
        );
    }
}

export default RTSPGrid;