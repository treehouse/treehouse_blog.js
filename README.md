# treehouse_blog

An npm Package for Node.js to get the metadata about 
the latest articles on the Treehouse blog.

## Basic Usage

```javascript
var Blog = require("treehouse_blog");

var treehouseBlog = new Blog();

/**
* When the "end" event is triggered an array of article 
* metadata is returned
**/
treehouseBlog.on("end", console.dir);

/**
* If a parsing, network or HTTP error occurs an
* error object is passed in to the handler or callback
**/
treehouseBlog.on("error", console.error);
```

### Example of Returned Data

```javascript

[ 
  { title: 'The Treehouse Show | Episode 148: Web Design Trends, Sharing Buttons, Flexbox Techniques',
    link: 'http://blog.teamtreehouse.com/treehouse-show-episode-148?utm_source=rss&utm_medium=rss&utm_campaign=treehouse-show-episode-148',
    publishDate: Tue Jul 07 2015 08:43:19 GMT-0700 (PDT),
    author: 'Mary McPherson' 
	},
  { title: 'New Course Roundup: Swift, Ruby, CSS',
    link: 'http://blog.teamtreehouse.com/new-course-roundup-swift-ruby-css?utm_source=rss&utm_medium=rss&utm_campaign=new-course-roundup-swift-ruby-css',
    publishDate: Mon Jul 06 2015 09:55:41 GMT-0700 (PDT),
    author: 'Mary McPherson' 
	},
  { title: 'An Introduction to the Rails Command',
    link: 'http://blog.teamtreehouse.com/introduction-rails-command?utm_source=rss&utm_medium=rss&utm_campaign=introduction-rails-command',
    publishDate: Mon Jul 06 2015 08:28:13 GMT-0700 (PDT),
    author: 'Jason Seifer' 
	},
  { title: 'Justin Switched Careers From a Teacher to the First Employee of an Exciting New Startup',
    link: 'http://blog.teamtreehouse.com/justin-switched-careers-teacher-first-employee-exciting-new-startup?utm_source=rss&utm_medium=rss&utm_campaign=justin-switched-careers-teacher-first-employee-exciting-new-startup',
    publishDate: Thu Jul 02 2015 08:00:50 GMT-0700 (PDT),
    author: 'Faye Bridge' 
	},
  { title: 'Tim Now Has a Career He’s Passionate About as a Full-time Developer',
    link: 'http://blog.teamtreehouse.com/tim-career-full-time-developer?utm_source=rss&utm_medium=rss&utm_campaign=tim-career-full-time-developer',
    publishDate: Wed Jul 01 2015 09:00:05 GMT-0700 (PDT),
    author: 'Faye Bridge' 
	},
  { title: 'How to Choose a Programming Language',
    link: 'http://blog.teamtreehouse.com/choose-programming-language?utm_source=rss&utm_medium=rss&utm_campaign=choose-programming-language',
    publishDate: Wed Jul 01 2015 08:00:39 GMT-0700 (PDT),
    author: 'Wade Christensen' 
	},
  { title: 'The Treehouse Show | Episode 147: Web Features, Form Design, Color Pickers',
    link: 'http://blog.teamtreehouse.com/episode-147-web-features-form-design-color-pickers?utm_source=rss&utm_medium=rss&utm_campaign=episode-147-web-features-form-design-color-pickers',
    publishDate: Tue Jun 30 2015 11:36:42 GMT-0700 (PDT),
    author: 'Mary McPherson' 
	},
  { title: 'Use jQuery to Asynchronously Load an Image',
    link: 'http://blog.teamtreehouse.com/using-jquery-asynchronously-loading-image?utm_source=rss&utm_medium=rss&utm_campaign=using-jquery-asynchronously-loading-image',
    publishDate: Tue Jun 30 2015 08:21:21 GMT-0700 (PDT),
    author: 'Andrew Chalkley' 
	},
  { title: 'New Course Roundup – Scrum, JavaScript, Swift, Ruby',
    link: 'http://blog.teamtreehouse.com/new-course-roundup?utm_source=rss&utm_medium=rss&utm_campaign=new-course-roundup',
    publishDate: Mon Jun 29 2015 09:33:41 GMT-0700 (PDT),
    author: 'Mary McPherson' 
	},
  { title: '3 Unexpected Things I Learned as a Treehouse Student',
    link: 'http://blog.teamtreehouse.com/3-unexpected-things-learned-treehouse-student?utm_source=rss&utm_medium=rss&utm_campaign=3-unexpected-things-learned-treehouse-student',
    publishDate: Mon Jun 29 2015 09:12:05 GMT-0700 (PDT),
    author: 'Jim Withington' 
	} 
]

```

`title`, `link` and `author` are `string`s and `publishData` is a JavaScript `Date` object.
