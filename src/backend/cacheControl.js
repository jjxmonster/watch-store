module.exports = {
   cacheControl: function (req, res, next) {
      res.header('Cache-Control', 'public, max-age=360000');
      res.removeHeader('Pragma');
      next();
   },
};
