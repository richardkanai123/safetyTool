import { NextResponse } from 'next/server';
import { incidences } from '@/data/Incidences';

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const incidentId = context.params.id;

  const incident = incidences.filter(
    (report) => report.incident_id === incidentId
  );
  if (incident.length === 0) {
    return NextResponse.json({
      status: 404,
      statusText: ' Incident Not Found',
    });
  }
  return NextResponse.json(incident, {
    status: 200,
    statusText: 'Found Incident',
  });
}
