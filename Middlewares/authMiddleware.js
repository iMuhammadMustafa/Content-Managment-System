export function addUserFromCookie(req, res, next) {
  res.locals.user = {};
  if (req.cookies.user) {
    res.locals.user = req.cookies.user;
  }
  next();
}
