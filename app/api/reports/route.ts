import { NextResponse } from 'next/server';
import { incidences } from '@/data/Incidences';

export async function GET() {
  return NextResponse.json(incidences, { status: 200 });
}
