import "@testing-library/jest-dom";
import { beforeAll, afterAll, afterEach } from "vitest";
import { server } from "../../src/mocks/server";

beforeAll(() => server.listen({ onUnhandleRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
