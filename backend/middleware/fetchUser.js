const fetchUser = (req, res, next) => {
  //Get user from the jwt token and add id to req cbject
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET); //JWT verify method is used for verify the token the take two arguments one is token string value, and second one is secret key for matching the token is valid or not. The validation method returns a decode object that we stored the token in.
    req.user_id = data.user_id;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchUser;
