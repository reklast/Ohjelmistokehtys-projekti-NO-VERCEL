import connectMongo from "@/utils/connectMongo";
import News from "@/Models/DbModelsNews";
import { NextResponse } from "next/server";
console.log("Start CONNECTING TO MONGO");

export async function POST(req: { body: ReadableStream }) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const body = await new Response(req.body).text();
    const createNews = await News.create(JSON.parse(body));
    console.log("CREATED DOCUMENT");

    return NextResponse.json({ createNews });
  } catch (error) {
    console.log(error);
    NextResponse.json({ error });
  }
}
