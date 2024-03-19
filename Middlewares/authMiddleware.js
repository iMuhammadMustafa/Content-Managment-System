export function addUserFromCookie(req, res, next) {
  res.locals.user = null;
  if (req.cookies.user) {
    res.locals.user = req.cookies.user;
  }
  next();
}
