import React from "react";
import Search from "./Search";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [] , selectedVideo: null  };

  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items, selectedVideo : response.data.items[0]});
  };

  onVideoSelect = (video)=>{
    this.setState({selectedVideo : video})
}

componentDidMount(){
    this.onSearchSubmit('Tigers')
}

  render() {
    return (
      <div>
        <Search onFormSubmit={this.onSearchSubmit} />
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
