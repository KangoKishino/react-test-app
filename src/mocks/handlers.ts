import { rest } from "msw";
import mockUser from "./resolvers/mockUser";

const handlers = [rest.get("/v1/users/:userId", mockUser)];

export default handlers;
