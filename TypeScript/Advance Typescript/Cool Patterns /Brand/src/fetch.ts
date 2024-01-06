import { Brand } from "./helpers/brand";

type UserId = Brand<string, "UserId">;
type PostId = Brand<string, "PostId">;

interface user {
  id: UserId;
  name: string;
}
interface post {
  id: PostId;
  title: string;
  content: string;
}
// db

const db: { users: user[]; posts: post[] } = {
  users: [
    {
      id: "1" as UserId,
      name: "John",
    },
  ],
  posts: [
    {
      id: "1" as PostId,
      title: "Hello World!",
      content: "This is my first blog.",
    },
  ],
};
// get post by id
const getPostById = (id: PostId) => {
  return db.posts.find((post) => post.id === id);
};
// get user by id
const getUserById = (id: UserId) => {
  return db.users.find((user) => user.id === id);
};
