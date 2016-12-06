const algolia = require('algoliasearch');
const config = require('../config/config');

const client = algolia(
  config.search_app_id, 
  config.search_api_key
);

const index = client.initIndex('dev_menus');

const searchByName = function(query) {
  console.log('Searching');
  if(query) {
    return new Promise((resolve, reject) => {
      index.search(query, (err, content) => {
        if(err) {
          console.log('Error:', err);
          reject(err);
        } else {
          const result = content && content.hits && content.hits[0];
          if(result) {
            resolve(result);
          } else {
            reject(new Error('Not found'));
          }
        }
      });
    });
  }
}

module.exports = searchByName;