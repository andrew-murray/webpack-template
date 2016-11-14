var gulp  = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");

var basePath = "./www";
var rootScript =  basePath + "/" + "main.js";

var webpackConfig = {
  debug: true,
  stats: {
    errorDetails: true
  },
  modulesDirectories: ["node_modules", "bower_components"],
  entry: {
      "main" : rootScript
  },
  module: {
      loaders: [{
          test: /.js?$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/,
          query: {
              presets: ['es2015']
          }
      }]
  },
  output: {
      // Make sure to use [name] or [id] in output.filename
      //  when using multiple entry points
      path: __dirname + "/" + basePath,
      filename: "[name].bundle.js",
      chunkFilename: "[id].bundle.js"
  }
};

var webpackCompiler = webpack( webpackConfig );

gulp.task("compile", function(callback)
{
  webpackCompiler.run(function(err, stats) {
      if(err) throw new gutil.PluginError("webpack", err);
	  if( err )
	  {
		gutil.log("[webpack]", String(err));
	  }
      callback();
  });
});

gulp.task("webpack-serve", function(callback)
{
    // Start a webpack-dev-server
  var devServer = new webpackDevServer(
	webpackCompiler, 
	{
		contentBase : basePath,
		stats: {
		  colors: true
		}
	}
  ).listen(4000, "localhost", function(err) {
      if(err)
	  {
		throw new gutil.PluginError("webpack-dev-server", err);
	  }
      // Server listening
      gutil.log("[webpack-dev-server]", "http://localhost:4000/");
	}
  );
});

gulp.task('default', ['webpack-serve']);
