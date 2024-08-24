import { GET } from "@/app/api/sneakers/route";
import { NextRequest } from "next/server";
import * as fs from "fs/promises";
import * as path from "path";

// Mock the path.resolve function
jest.mock("path", () => ({
  resolve: jest.fn(() => "/mocked/path/to/sneakers.json"),
}));

describe("GET /api/sneakers", () => {
  afterEach(() => {
    jest.restoreAllMocks(); // Restore the original implementation after each test
  });

  it("should return all sneakers when no query parameters are provided", async () => {
    const sneakers = [
      {
        name: "Sneaker 1",
        category: ["Category 1"],
        brand_name: "Brand 1",
      },
      {
        name: "Sneaker 2",
        category: ["Category 2"],
        brand_name: "Brand 2",
      },
    ];

    // Mocking fs.readFile to resolve with the stringified sneakers array
    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(sneakers));

    const req = new NextRequest("http://localhost/api/sneakers");

    const res = await GET(req);

    const json = await res.json();

    console.log("Response JSON:", json);
    expect(json).toEqual(sneakers);
    expect(fs.readFile).toHaveBeenCalledWith(
      "/mocked/path/to/sneakers.json",
      "utf-8",
    );
  });

  it("should filter sneakers by category", async () => {
    const sneakers = [
      {
        name: "Sneaker 1",
        category: ["Category 1"],
        brand_name: "Brand 1",
      },
      {
        name: "Sneaker 2",
        category: ["Category 2"],
        brand_name: "Brand 2",
      },
    ];

    jest.spyOn(fs, "readFile").mockResolvedValueOnce(JSON.stringify(sneakers));

    const req = new NextRequest(
      "http://localhost/api/sneakers?category=Category 1",
    );

    const res = await GET(req);

    const json = await res.json();
    expect(json).toEqual([sneakers[0]]); // Verifica se o tênis da Category 1 é retornado
  });

  it("should return a 500 status if there is an error reading the file", async () => {
    jest.spyOn(fs, "readFile").mockImplementationOnce(() => {
      throw new Error("File read error");
    });

    const req = new NextRequest("http://localhost/api/sneakers");

    const res = await GET(req);

    const json = await res.json();
    expect(res.status).toBe(500);
    expect(json).toEqual({ message: "Erro ao processar a requisição" });
  });
});
