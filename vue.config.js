module.exports = {
  devServer: {
    https: true
  },
  pwa: {
    themeColor: '#4DBA87',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/sw.js'
    }
  }
}
