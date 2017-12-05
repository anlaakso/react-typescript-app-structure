const path = require('path');
const nib = require('nib');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: {
        main: ['./src/Main.tsx'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './public'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                }],
            },
            {
                test: /\.(styl)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'resolve-url-loader',
                        {
                            loader: 'stylus-loader',
                            options: {
                                use: [nib()],
                                import: ['~nib/lib/nib/index.styl'],
                            }
                        }
                    ],
                }),
            },
            {
                test: /\.svg$/,
                use: 'raw-loader',
            },
            { 
                 enforce: "pre", 
                 test: /\.js$/, 
                 loader: 'source-map-loader' 
            },
        ],
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.json', '.styl'],
        mainFiles: ['index'],
        modules: ['node_modules'],
        alias: {
            actions: path.resolve(__dirname, 'src/actions/'),
            components: path.resolve(__dirname, 'src/components/'),
            config: path.resolve(__dirname, 'src/config/'),
            enums: path.resolve(__dirname, 'src/enums/'),
            helpers: path.resolve(__dirname, 'src/helpers/'),
            reducers: path.resolve(__dirname, 'src/reducers/'),
            middlewares: path.resolve(__dirname, 'src/middlewares/'),
            store: path.resolve(__dirname, 'src/store/'),
            icons: path.resolve(__dirname, 'src/icons/'),
            styles: path.resolve(__dirname, 'src/styles/'),
            services: path.resolve(__dirname, 'src/services/'),
        },
    },
    watchOptions: {
        aggregateTimeout: 100,
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': `"${process.env.NODE_ENV}"`,
          }
        }),
    ],
    stats: {
        assets: true,
        children: false,
    },
};
