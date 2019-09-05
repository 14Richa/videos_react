import './VideoDetail.css';


import React from 'react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <div> Loading.. </div>
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

	return ( 
		<div className = "video"> 
			<div className = "ui embed">
				<iframe title = "video-player" src = { videoSrc} />
			</div>
			<div className = "ui segment">

			<div class = "description">
				<h3 className = "ui header">{video.snippet.title}</h3>
				<p> {video.snippet.description}</p>
			</div>
			</div>
		</div>



	);
};

export default VideoDetail;