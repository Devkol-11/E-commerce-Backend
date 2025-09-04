import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';
import prisma from './Database/client.js';
dotenv.config();

const PORT = 5000;
const server = http.createServer(app);

async function initDb() {
  try {
    console.log('connecting to the Database.....');
    await prisma.$connect();
  } catch (error) {
    console.error('error connecting to the Database', error);
  }
}

async function shutDown() {
  console.log('Killing the server.....');
  await prisma.$disconnect();
  console.log('Database disconnected');
  server.close(() => {
    process.exit(1);
  });
}

initDb().then(() => {
  console.log('Starting up the server');
  server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
});

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
