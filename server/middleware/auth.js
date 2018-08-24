const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  // read the token from header or url
  // req에 cookies가 응답이 오는 것이 아니라 signedCookies라는 응답이 온다
  const token = req.headers['x-access-token'] || req.signedCookies.token;
  // const token = req.cookies.token;

  // token does not exist
  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'not logged in'
    })
  }

  // create a promise that decodes the token
  const p = new Promise(
    (resolve, reject) => {
      jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
        if (err) reject(err)
        resolve(decoded)
      })
    }
  )

  // if it has failed to verify, it will return an error message
  const onError = (error) => {
    res.status(403).json({
      success: false,
      message: error.message
    })
  }

  // process the promise
  p.then((decoded) => {
    req.decoded = decoded
    next()
  }).catch(onError)
}

module.exports = authMiddleware
