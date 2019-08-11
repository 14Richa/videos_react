import axios from 'axios';

const KEY = 'AIzaSyAPOGreO8ooUBgghE7dNG6tjCnmX0Q23xg';

export default axios.create ({
	baseURL:'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		maxResults: 8,
		key: KEY

	}
});