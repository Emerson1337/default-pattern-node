import jwt from 'jsonwebtoken';

const AuthMiddleware = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).send({
      error: "no token provide"
    })
  }

  // const parts = authHeader.split(' ');

  // if (!(parts.length === 2)) {
  //   return response.status(401).send({
  //     error: "token error!"
  //   })
  // }

  // const [scheme, token] = parts;

  // if (!(/^Bearer$^/i).test(scheme)) {
  //   return response.status(401).send({ error: 'token malformatted' })
  // }


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