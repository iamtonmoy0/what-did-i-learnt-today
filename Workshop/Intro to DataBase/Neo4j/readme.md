### Neo4j

Let's get our database up and running! Run the following.

```
docker run -dit --rm --name=my-neo4j -p 7474:7474 -p 7687:7687 --env=NEO4J_AUTH=none neo4j:4.1.3
```

This should drop you into an interactive with Neo4j. The first thing we're going to do is use a CREATE statement to make our first actor, Michael Cera. I love the movie Scott Pilgrim vs. the World so we're going to describe the actors in it here.

```
CREATE (Person {name:'Michael Cera', born:1988});
```

You can see we created a new node with a label of Person and two attributes: a name of Michael Cera and a birth year of 1988. CREATE (Person {name:'Michael Cera', born:1988});

Now what if we want to find that same record?

```
MATCH (p {name: "Michael Cera"}) RETURN p;
```

Now we're using a shorthand variable, p. We could call this anything.
The first part reprsents what we're querying for. We didn't specify what label it was going to be but we have. Then it would look like MATCH (p {name: "Michael Cera"}) RETURN p;
You need the return at the end or you wouldn't get anything back.
