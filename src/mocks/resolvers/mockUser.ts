import { ResponseResolver, restContext } from "msw";
import { User } from "../../App";

const mockUser: ResponseResolver<any, typeof restContext> = (req, res, ctx) => {
  const userId = Number(req.params.userId);
  const user: User = {
    id: userId,
    username: "test name",
    age: 18,
  };

  return res(ctx.json(user));
};

export default mockUser;
