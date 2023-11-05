const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql

const UserType = new GraphQLObjectType({
    name: "User",
    type: "Query",
    fields: {
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString }
    }
});

const TruismType = new GraphQLObjectType({
    name: "Truism",
    type: "Query",
    fields: {
        id: { type: GraphQLString },
        truism: { type: GraphQLString },
        artist_id: { type: GraphQLString }
    }
});

exports.UserType = UserType;
exports.TruismType = TruismType;