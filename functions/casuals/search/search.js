const algolia = require('algoliasearch');

const client = algolia(
  process.env.SEARCH_APP_ID, 
  process.env.SEARCH_API_KEY
);

const index = client.initIndex('dev_menus');

const searchByName = (query) => {
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