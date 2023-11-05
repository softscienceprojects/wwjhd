const { db } = require('../pgAdaptor');
const { GraphQLObjectType, GraphQLID } = require('graphql');
const { UserType, TruismType } = require('./types');

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    type: "Query",
    fields: {
        truism: {
            type: TruismType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {
                const query = `SELECT * FROM trusims WHERE id= $1`;
                const values = [args.id];

                return db
                .one(query, values)
                .then(res=> res)
                .catch(err=> err);
            }
        }, 
        user: {
            type: UserType,
            args: { id: {type: GraphQLID } },
            resolve(parentValue, args) {
                const query = `SELECT * FROM users WHERE id=$1`;
                const values = [args.id];

                return db
                .one(query, values)
                .then(res=> res)
                .catch(err=> err)
            }
        }
    }
});

exports.query = RootQuery