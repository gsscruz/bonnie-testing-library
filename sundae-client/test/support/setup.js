import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import { beforeAll, afterAll, afterEach } from "vitest";

beforeAll(() => server.listen({ onUnhandleRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
