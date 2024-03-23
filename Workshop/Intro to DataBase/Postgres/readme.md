### Starting PostgreSQL

```sh
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d --rm postgres:13.0
```

```sh
docker exec -it -u postgres my-postgres psql
```

create db

```
CREATE DATABASE message_boards;
```

```
\c message_boards;
-- \connect message_boards works too
```

```
-- see all databases
\l

-- see all tables in this database, probably won't see anything
\d

-- see all available commands
\?

-- see available queries
\h

-- run a shell command
\! ls && echo "hi from shell!"
```

### CREATE DB

```
CREATE TABLE users (
  user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 25 ) UNIQUE NOT NULL,
  email VARCHAR ( 50 ) UNIQUE NOT NULL,
  full_name VARCHAR ( 100 ) NOT NULL,
  last_login TIMESTAMP,
  created_on TIMESTAMP NOT NULL
);
```

# view database

```
SELECT * FROM users;
```

```SELECT name, full_name FROM users;

```

# Querying PostgreSQL

You'll find there's a lot of depth to SQL. There are people who most of their jobs is just writing SQL. But let's hop into the basics here. First thing I want to do is insert some dummy data into our users database.

Click here for a sample set of tables for your database. What this query will do is drop all your existing tables and then re-set them up. At any time you can re-run this to get a fresh copy of your tables. You can literally just copy this whole thing and paste it into your command line connection to PostgreSQL (psql) and it'll work. There's a more elegant way to load it from the command line but we're in Docker and it's annoying so I'd just copy/paste it. It'll probably take 90 seconds to run.

### SELECT

Let's start with SELECT. This is how you find things in a SQL database. Let's run again the SELECT statement from our previous section and talk about it.

```
SELECT * FROM users;
```

This will get every field (which is what the \* means, a.k.a. the wildcard) from the users database. This will be 1000 users.

### LIMIT

Let's select fewer users;

```
SELECT * FROM users LIMIT 10;
```

This will scope down to how many records you get to just 10.

### Projection

Let's just some of the columns now, not all of them (remember projections?)

```
SELECT username, user_id FROM users LIMIT 15;

```

In general it's a good idea to only select the columns you need. Some of these databases can have 50+ columns. Okay we've seen basic reads.

### WHERE

Let's find specific records

```
SELECT username, email, user_id FROM users WHERE user_id=150;
SELECT username, email, user_id FROM users WHERE last_login IS NULL LIMIT 10;

```

The first one will give us one user whose user_id is 150. The second one will give us 10 users that have never logged.

### AND plus date math

What if we wanted to see if they hadn't logged in and were created more than six months ago?

```
SELECT username, email, user_id, created_on FROM users WHERE last_login IS NULL AND
```

created_on < NOW() - interval '6 months' LIMIT 10;
This shows off the AND keyword where you can query multiple conditions.
This shows off a bit of date math too. To be honest every time I have to do date math I have to look it up but here's the scoop for this one. created_on is a timestamp and we're comparing to NOW() (the current time of the server) minus the time period of six months. This will give us all users who haven't ever logged in and have had accounts for six months.

### ORDER BY

What if wanted to find the oldest accounts? Let's use a sort.

```
SELECT user_id, email, created_on FROM users ORDER BY created_on LIMIT 10;
```

For the newest account, just add DESC (you can put ASC above, it's just implied)

```
SELECT user_id, email, created_on FROM users ORDER BY created_on DESC LIMIT 10;
COUNT(*)
```

### Wondering how many records we have in our database?

```
SELECT COUNT(_) FROM users;
```

This will tell you how many users we have in the database total. The \_ represents that we're just looking total rows. If we wanted to look at how many users have ever logged in (since COUNT will ignore NULL values)

```
SELECT COUNT(last_login) FROM users;

```

### UPDATE, RETURNING

Let's say user_id 1 logged in. We'd need to go into their record and update their last_login. Here's how we'd do that.

```
UPDATE users SET last_login = NOW() WHERE user_id = 1 RETURNING \*;
```

Tools we already know! Let's say user_id 2 choose to update their full_name and email

```
UPDATE users SET full*name= 'Brian Holt', email = 'lol@example.com' WHERE user_id = 2 RETURNING *;
```

### You just comma separate to do multiple sets.

Make sure you use single quotes. Double quotes cause errors.
RETURNING \_ is optional. This is basically saying "do the update and return to me the records after they've been updated.

### DELETE

This works as you would expect based on what we've done before

```
DELETE FROM users WHERE user_id = 1000;
```

---

### SQL – COMPLEX SQL QUERIES

### Complex SQL Queries

Let's get into some more complicated querying. First thing we're going to need is two more tables, comments and boards. We'll be making the data structure for a very simple message board system that has users, comments, and boards. The interesting part here is that every comment is posted by a user and therefore will need to reference the user table, and it will be posted to board and therefore will need to reference a board from the boards table. This is what you would call relational data and where relational databases really shine.

### Foreign Keys

Let's jot down all of our schemas for our users, boards, and comments.

```

CREATE TABLE users (
  user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 25 ) UNIQUE NOT NULL,
  email VARCHAR ( 50 ) UNIQUE NOT NULL,
  full_name VARCHAR ( 100 ) NOT NULL,
  last_login TIMESTAMP,
  created_on TIMESTAMP NOT NULL
);

CREATE TABLE boards (
  board_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  board_name VARCHAR ( 50 ) UNIQUE NOT NULL,
  board_description TEXT NOT NULL
);

CREATE TABLE comments (
  comment_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
  board_id INT REFERENCES boards(board_id) ON DELETE CASCADE,
  comment TEXT NOT NULL,
  time TIMESTAMP
);

```

The first two should look pretty familiar. The only new-ish thing is the user of the TEXT data type. This is basically a VARCHAR with no cap (or rather a very large cap.) It has some other small differences but for now just know it's uncapped text.
user_id INT REFERENCES users(user_id) is technically all you need to make a foreign key. The first part, INT, makes it known that this key will be stored as an integer. It then uses the REFERENCES key word to let PostgreSQL know that it is a foreign key. A foreign key is a field in one table that references the primary key of another table. In this case, a comment will reference the user_id in another table, the users table. The users part say it's reference the users table and the (user_id) is the name of the key in the other table. In this case, we called both user_id (which will probably happen somewhat frequently but not always) so they match but if we had called the user_id just id in the users table, we'd put id there.
ON DELETE CASCADE lets PostgreSQL know what to do if the user gets deleted. So if a user makes a comment on the message board and then deletes their account, what do you want it to do? If you omit the ON DELETE CASCADE part, it's the same as doing ON DELETE NO ACTION which means it'll just error and not let you delete the user until you've deleted all the comments first. You can also do ON DELETE SET NULL which means it'll make the user_id null on any comment that was made by that user.
We've dne the same for board_id, just referencing the boards table instead of the users table.
Let's go ahead and put some dummy data in there. Copy / paste [this query] into your psql terminal. It may take a few minutes.
