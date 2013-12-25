
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.locals = {
    title: 'Play: Pretty Colors',
  };
  return res.render(
    'index',
    {
      partials:
      {
        head: 'head',
        foot: 'foot'
      }
    }
  );
};