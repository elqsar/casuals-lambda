const formatSearchResult = (result) => {
  const reply = result.dishes.map((it) => {
    return it.dish.name + ':' + it.dish.price;
  });
  return reply.join('\n');
}

module.exports = formatSearchResult;