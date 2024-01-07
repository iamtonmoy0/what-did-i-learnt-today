import { Brand } from "./helpers/brand";

type UserId = Brand<string, "UserId">;
type PostId = Brand<string, "PostId">;

interface User {
  id: UserId;
  name: string;
}
interface Post {
  id: PostId;
  title: string;
  description: string;
}
