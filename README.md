# E-commerce-Backend
A modular and scalable backend API for an e-commerce platform, built with Node.js, TypeScript, Express, and PostgreSQL (Prisma ORM). Handles core features like authentication, products, cart, orders, payments, and delivery.

✨ **Features**
🔐 Authentication & Authorization – Secure signup, login, JWT sessions

📦 Product & Catalog Management – Full CRUD for products, categories, and inventory

🛍️ Cart & Checkout – Add to cart, update quantities, and manage checkout flow

💳 Orders & Payments – Order lifecycle, payment handling, and order history

🚚 Delivery Tracking – Shipping info and order status updates

🏗️ Clean Architecture – Separation of concerns for maintainability and scalability

🛠 **Tech Stack**
Node.js – Runtime

TypeScript – Static typing for safer code

Express.js – Web framework

PostgreSQL – Relational database

Prisma ORM – Database schema & queries

JWT – Authentication

ESLint + Prettier – Code quality & formatting

Project Structure
apps/backend/
 ├── src/
 │   ├── controllers/   # Handle API requests & responses
 │   ├── services/      # Business logic
 │   ├── routes/        # Route definitions
 │   ├── models/        # Prisma models
 │   └── utils/         # Helpers & middleware
 ├── prisma/            # Prisma schema & migrations
 └── package.json

🚀 Getting Started
1. Clone the repository
2. git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend/apps/backend

2. Install dependencies
4. npm install
   
3. Setup environment variables
Create a .env file with:
DATABASE_URL="postgresql://user:password@localhost:5432/ecommerce"
JWT_SECRET="your_jwt_secret"
PORT=5000

4. Run migrations
5. npx prisma migrate dev

5. Start development server
6. npm run dev

🧪 **Available Scripts**

npm run dev – Start development server
npm run build – Compile TypeScript to JavaScript
npm run start – Run compiled server
npx prisma studio – Explore database in Prisma Studio

📌 **Roadmap**

 Multi-payment gateway integration
 Wishlist & favorites
 Admin dashboard API
 Analytics & reporting
 Multi-tenant support
