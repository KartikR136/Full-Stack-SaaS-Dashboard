import { hash } from "bcryptjs";
import { prisma } from "../src/lib/prisma";

async function main() {
  const password = await hash("password123", 10);

  const organization = await prisma.organization.create({
    data: {
      name: "Orbit Technologies",
      slug: "orbit-technologies",
    },
  });

  await prisma.user.create({
    data: {
      name: "Kartikey",
      email: "kartikey@orbit.dev",
      password,
      role: "OWNER",
      organizationId: organization.id,
    },
  });

  await prisma.subscription.create({
    data: {
      organizationId: organization.id,
      status: "ACTIVE",
      planName: "Growth",
      seats: 15,
      renewalDate: new Date("2026-12-31"),
    },
  });

  console.log("Seed completed");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });