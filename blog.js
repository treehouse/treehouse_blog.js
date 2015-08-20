var EventEmitter = require("events").EventEmitter;
var http = require("http");
var util = require("util");
var libxmljs = require("libxmljs");

/**
 * An EventEmitter to get a the latest Article Titles, Links, Publish Dates and Authors from the Treehouse Blog.
 * @constructor
 */
function Blog() {

    EventEmitter.call(this);

    var blogEmitter = this;

    //Connect to the RSS Feed URL (http://blog.teamtreehouse.com/feed)
    var request = http.get("http://blog.teamtreehouse.com/feed", function(response) {
        var body = "";

        if (response.statusCode !== 200) {
            request.abort();
            //Status Code Error
            blogEmitter.emit("error", new Error("There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"));
        }

        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
            blogEmitter.emit("data", chunk);
        });

        response.on('end', function () {
            if(response.statusCode === 200) {
                try {
                    //Parse the data
                    var xmlDoc = libxmljs.parseXmlString(body.replace(/dc:creator/g, "creator"));                 
                    var articles = xmlDoc.find("//rss/channel/item").map(parseNode);
                    blogEmitter.emit("end", articles);
                } catch (error) {
                    blogEmitter.emit("error", error);
                }
            }
        }).on("error", function(error){
            blogEmitter.emit("error", error);
        });
    });
}

function parseNode(node) {
    return {
        title: node.get("title").text(),
        link: node.get("link").text(),
        publishDate: new Date(node.get("pubDate").text()),
        author: node.get("creator").text()                               
    }             
}

util.inherits(Blog, EventEmitter);

module.exports = Blog;