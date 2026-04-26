# Wine Heaven - Premium Wine E-commerce Platform

## What is this project?
**Wine Heaven** is a sophisticated, premium e-commerce platform dedicated to the world's finest vintage wines. The application provides a high-end shopping experience with a modern, glassmorphic UI, allowing wine enthusiasts to discover, curate, and purchase exclusive collections. It features a robust administrative backend for inventory, customer, and order management.

## Features

### 🍷 For Customers
- **Curated Discovery**: Browse premium wine collections with 3D parallax effects and scroll-driven animations.
- **Premium Checkout**: A seamless, professional checkout flow with address management.
- **Wallet & Payments**: Integrated wallet system and Razorpay payment gateway with support for failed payment recovery.
- **Order Tracking**: Detailed order status tracking with clear distinction between global order status and individual item dispatch status.
- **Authentication**: Secure login/signup with OTP verification and OAuth support (Google).
- **Responsive Design**: Fully optimized for both desktop and mobile devices.

### 🛡️ For Administrators
- **Dynamic Dashboard**: Real-time sales analytics and business insights using Chart.js.
- **Product Management**: Complete CRUD with image cropping and Cloudinary integration.
- **Category & Coupon Control**: Manage inventory categories and implement marketing strategies with a dedicated coupon/offer system.
- **Order Management**: Oversee fulfillment status and handle customer returns/cancellations.
- **Standardized Feedback**: Premium toast notifications for all administrative actions.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Frontend**: EJS (Embedded JavaScript), Vanilla CSS (Glassmorphism), Tailwind CSS
- **Authentication**: Passport.js, Bcrypt.js
- **Payment Gateway**: Razorpay
- **Image Processing**: Sharp, Multer, Cloudinary
- **Reports**: PDFKit (Invoices), ExcelJS (Sales Reports), Puppeteer
- **Notifications**: SweetAlert2 (Toasts & Modals)

## Architecture
The project follows the **MVC (Model-View-Controller)** pattern for clean separation of concerns and scalability.

- **Models**: Defines data schemas (Users, Products, Orders, Cart, Coupons, etc.) using Mongoose.
- **Views**: Dynamic templates rendered using EJS with structured partials for reusability.
- **Controllers**: Contains business logic and handles communication between models and views.
- **Routes**: Manages API and page navigation flow.


## How to run

### Prerequisites
- Node.js installed
- MongoDB (local or Atlas)
- Cloudinary Account (for image hosting)
- Razorpay API Keys

### Steps
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Wine-heaven
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add:
   ```env
   PORT=3005
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_secret
   CLOUDINARY_CLOUD_NAME=your_name
   CLOUDINARY_API_KEY=your_key
   CLOUDINARY_API_SECRET=your_secret
   RAZOR_KEY_ID=your_razorpay_id
   RAZOR_KEY_SECRET=your_razorpay_secret
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```

4. **Start the application:**
   ```bash
   # Production
   npm start
   
   # Development (with nodemon)
   npm run dev
   ```

5. **Access the application:**
   Navigate to `http://localhost:3005`
