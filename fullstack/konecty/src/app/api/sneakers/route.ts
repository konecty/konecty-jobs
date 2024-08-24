import { NextRequest, NextResponse } from "next/server";
import * as path from "path";
import * as fs from "fs/promises";
import { ISneaker } from "@/interfaces/ISneaker.interface";

const sneakersFilePath = path.resolve(process.cwd(), "data/sneakers.json");

export async function GET(req: NextRequest) {
  try {
    const data = await fs.readFile(sneakersFilePath, "utf-8");

    const parsedData = JSON.parse(data);

    const allSneakers = Array.isArray(parsedData)
      ? parsedData
      : parsedData.sneakers;

    if (!Array.isArray(allSneakers)) {
      throw new Error(
        "A estrutura dos dados JSON não contém um array de tênis"
      );
    }

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const name = searchParams.get("name");

    let filteredSneakers = allSneakers;

    if (category) {
      filteredSneakers = filteredSneakers.filter((sneaker: ISneaker) =>
        sneaker.category.includes(category)
      );
    }

    if (name) {
      const lowerCaseName = name.toLowerCase();
      filteredSneakers = filteredSneakers.filter((sneaker: ISneaker) =>
        sneaker.name.toLowerCase().includes(lowerCaseName)
      );
    }

    return NextResponse.json(filteredSneakers);
  } catch (error) {
    console.error("Erro ao carregar os tênis:", error);
    return NextResponse.json(
      { message: "Erro ao processar a requisição" },
      { status: 500 }
    );
  }
}
