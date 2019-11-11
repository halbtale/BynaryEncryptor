module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ["./node_modules"]
        }
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/BynaryEncryptor/" : "/"
};
