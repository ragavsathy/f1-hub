import { PrismaClient } from '@prisma/client';
import ClientUI from './ClientUI';

const prisma = new PrismaClient();

export default async function DriverDashboard({ params }) {
  // Use await directly in Server Components
  const resolvedParams = await params;
  
  const driver = await prisma.driver.findUnique({
    where: { id: resolvedParams.id },
    include: {
      races: {
        include: {
          laps: true
        }
      }
    }
  });

  return <ClientUI driver={driver} />;
}
