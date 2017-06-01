var ghpages = require('gh-pages');
var path = require('path');
 
ghpages.publish('.', function(err) {
  if(err) {
    console.error("Could not publish:", err)
  }
  console.log("Published !")
});
