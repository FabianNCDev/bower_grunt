module.exports=(grunt)=>{
  grunt.initConfig({
    bowerInstall:{
      dist:{
        src:['*.html'],
        dependencies:true,
        devDependencies:true,
        exclude:[]
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-install');

  grunt.registerTask('default',['bowerInstall']);
};
