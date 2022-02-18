import jwt from 'jsonwebtoken';

const AuthMiddleware = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).send({
      error: "no token provide"
    })
  }

  jwt.verify(authHeader, process.env.PASS_TOKEN_JWT, (err, decoded) => {
    if (err) {
      return response.status(401).send({
        error: 'token invalid!'
      })
    }
    response.locals.userId = decoded.id;
  })

  return next();
}

export { AuthMiddleware };