module.exports = {
  async redirects() {
    return [
      {
        source: '/404.js',
        destination: '/',
        permanent: true
      }
    ]
  }
}
