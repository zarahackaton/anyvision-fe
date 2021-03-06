import React, {Component} from "react";
import * as RTSP from '../apiRoutes/RTSP';

class RTSPGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rtspUrls: [],
            selectedVideoUrl: ''
        };
    }

    showVideo = (url) => {
        this.setState({selectedVideoUrl: url});
    };

    showUrl = (item, index) => {
        return (
            <div key={index}>
                <a href={item.url} onClick={() => this.showVideo(item.url)}>{item.url}</a>
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
                {this.state.selectedVideoUrl &&
                <iframe src={this.state.selectedVideoUrl} width="35%" height="300" />
                }
            </div>
        );
    }
}

export default RTSPGrid;