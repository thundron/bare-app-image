const fs = require('fs')

exports.makeDir = async function makeDir(name) {
  return new Promise((resolve, reject) => {
    fs.mkdir(name, { recursive: true }, (err) => {
      err ? reject(err) : resolve()
    })
  })
}
