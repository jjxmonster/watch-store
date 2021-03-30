module.exports = {
   cacheControl: function (req, res, next) {
      res.header('Cache-Control', 'public, max-age=31536000');
      res.removeHeader('Pragma');
      next();
   },
};
