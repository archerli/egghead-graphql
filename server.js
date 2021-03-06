import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';

const app = Express();
app.use( '/graphql', GraphHTTP( { schema: Schema, graphiql: true } ) );
app.use( '/', Express.static( './public' ) );
app.listen( 3333, function ( err ) {
    console.log( 'Open browser to localhost:3333' );
} );

