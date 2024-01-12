const express = require("express");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLID,
} = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const UsersList = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 45 },
  { id: 3, name: "who Smith", age: 40 },
];

// usr type
const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLString },
  }),
});
// root query
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    // get all users
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return UsersList;
      },
    },
    // get single user
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return UsersList.find((user) => user.id === args.id);
      },
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery });

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
