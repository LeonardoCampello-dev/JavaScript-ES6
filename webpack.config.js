module.exports = {
    entry: './main.js', // O entry é nosso arquivo principal
    output: { // Lugar onde será enviado o código convertido
        path: __dirname, // Caminho (raíz)
        filename: 'bundle.js', // Nome do arquivo
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Buscar arquivos .js 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    }
}