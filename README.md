##installing Bower
`npm install -g bower`

##usin Bower - bower.json
`bower.json`
`// bower.json
{
  "name": "todo-app",
  "dependencies": {
    "jquery": "~2.1.0"
  }
}
`
##install dependencies
`bower install`
for example installing backbone:
`bower install backbone -S`
##Config-  .bowerrc
{
"directory": "build/bower_components"
}

##bower with grunt
`grunt-bower-install`

## bowerInstall target (Gruntfile.js)
This target has a number of options, the first being the src. The grunt-bower-install plug-in updates the HTML; therefore, it does not require a destination file. The next two options determine which dependencies should be injected into the HTML. Dependencies are the production and development dependences, while devDependencies relates to Bower packages that are only required for development. The final option is exclude, which is empty in our example but can be used to exclude particular libraries from being processed by the plug-in.
Before running the task on the project, there is one final step: updating the HTML.
`<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Pro Grunt.js: Todo List</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    !-- bower:css -->
    <!-- endbower -->
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body>
    <!--[if lt IE 8]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <!-- Add your site or application content here -->
    <h1>Pro Grunt.js</h1>
    <h2>Todo List</h2>
    <!-- bower:js -->
    <!-- endbower -->
    <script src="js/main.js"></script>
  </body>
</html>`

##runing grunt-bower-install
`grunt bowerInstall`
