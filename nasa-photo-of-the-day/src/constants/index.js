export const BASE_URL = 'https://api.nasa.gov/planetary/apod';
export const API_KEY = 'Vk62T50Cvk0nayzkgjY0m1xBRkKn5rruH3pJ6QFh';

// https://api.nasa.gov/#apod
// https://github.com/nasa/apod-api

// HTTP Request
// GET https://api.nasa.gov/planetary/apod

// concept_tags are now disabled in this service. Also, an optional return parameter copyright is returned if the image is not public domain.

// Query Parameters
// Parameter 	Type 	    Default 	Description

// date 	    YYYY-MM-DD 	today 	    The date of the APOD image to retrieve
// start_date 	YYYY-MM-DD 	none 	    The start of a date range, when requesting date for a range of dates. Cannot be used with date.
// end_date 	YYYY-MM-DD 	today 	    The end of the date range, when used with start_date.
// count 	    int 	    none 	    If this is specified then count randomly chosen images will be returned. Cannot be used with date or start_date and end_date.
// thumbs 	    bool 	    False 	    Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.
// api_key 	    string 	    DEMO_KEY 	api.nasa.gov key for expanded usage

// Example query
// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
