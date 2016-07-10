module.exports = {
    destination: './src',
    paths: {
        index: './src/index.html',
        scripts: './src/**/*.js',
        styles: './src/**/*.css'
    },
    jsOrder: [
        '**/app.module.js',
        '**/*.module.js',
        '**/*.js'
    ],
};