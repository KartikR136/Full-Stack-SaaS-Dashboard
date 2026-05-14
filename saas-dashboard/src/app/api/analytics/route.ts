import { NextResponse } from "next/server";
import { getAnalyticsSummary } from "@/services/analytics.service";

export async function GET() {
  const analytics = await getAnalyticsSummary();

  return NextResponse.json(analytics);
}