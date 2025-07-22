# 🪙 Cryptonite



![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextlds.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoio/badge/Vercel-000000?style=for-the-badge&logo=vercel& cryptocurrency tracker web application built with Next.js*

Track, analyze, and stay updated with real-time cryptocurrency market data and trends.



## 📋 **Table of Contents**

- [Overview](#-overview)
- [Features](#-features)
- [Technologies](#-technologies)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## 🎯 **Overview**

**Cryptonite** is a comprehensive cryptocurrency tracking web application developed as part of the **Groww Front-End Assignment**. This project demonstrates modern web development practices using Next.js and provides users with real-time cryptocurrency market data, detailed analytics, and intuitive user experience.

## ✨ **Features**

### 🔄 **Real-time Data**
- **Live price updates** for major cryptocurrencies
- **Market cap tracking** and volume statistics
- **Price change indicators** with percentage variations
- **Automatic data refresh** at configurable intervals

### 📊 **Market Analytics**
- **Historical price charts** with interactive visualizations
- **Market trend analysis** with technical indicators
- **Portfolio performance** tracking and insights
- **Price alerts** and notifications

### 🎨 **User Experience**
- **Responsive design** optimized for all devices
- **Dark/Light theme** toggle for user preference
- **Search functionality** with real-time filtering
- **Favorites list** for personalized tracking
- **Sorting and filtering** options for market data

### 📈 **Advanced Features**
- **Price prediction models** using historical data
- **Watchlist management** with custom categories
- **Export functionality** for market data
- **Social sentiment integration** for market insights

## 🛠️ **Technologies**

### **Frontend Framework**
- **Next.js 14+** - React framework with SSR/SSG capabilities
- **React 18** - Component-based UI library
- **TypeScript** - Type-safe development environment

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **Styled-Components** - CSS-in-JS styling solution
- **Framer Motion** - Animation and gesture library
- **Chart.js/Recharts** - Data visualization components

### **State Management**
- **Redux Toolkit** - Predictable state container
- **Zustand** - Lightweight state management
- **React Query/TanStack Query** - Server state management

### **Development Tools**
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Jest** - Unit testing framework
- **Cypress** - End-to-end testing

## 🔧 **Prerequisites**

- **Node.js 18.0+** - JavaScript runtime environment
- **npm/yarn/pnpm** - Package manager
- **Git** - Version control system
- **Cryptocurrency API Key** - CoinGecko/CoinMarketCap API access

## 📦 **Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/cryptonite.git
   cd cryptonite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment setup:**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure environment variables:**
   ```env
   NEXT_PUBLIC_API_URL=https://api.coingecko.com/api/v3
   NEXT_PUBLIC_API_KEY=your_api_key_here
   DATABASE_URL=your_database_url
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

5. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open browser:**
   Navigate to `http://localhost:3000`

## 🚀 **Usage**

### **Dashboard View**
- **Market Overview**: Real-time cryptocurrency prices and market statistics
- **Top Gainers/Losers**: Quick insights into market movements
- **Trending Coins**: Popular cryptocurrencies based on search volume

### **Detailed Coin View**
- **Price Charts**: Interactive historical price data
- **Market Data**: Comprehensive statistics and metrics
- **News Integration**: Latest news and updates for specific coins

### **Portfolio Management**
- **Add Holdings**: Track your cryptocurrency investments
- **Performance Analytics**: Monitor portfolio growth and losses
- **Profit/Loss Calculation**: Real-time P&L calculations

### **Watchlist Features**
- **Custom Lists**: Create personalized cryptocurrency watchlists
- **Price Alerts**: Set notifications for price targets
- **Comparison Tools**: Compare multiple cryptocurrencies

## 📁 **Project Structure**

```
cryptonite/
│
├── components/
│   ├── ui/                     # Reusable UI components
│   ├── charts/                 # Chart components
│   ├── layout/                 # Layout components
│   └── features/               # Feature-specific components
│
├── pages/                      # Next.js pages
│   ├── api/                    # API routes
│   ├── coins/                  # Individual coin pages
│   └── portfolio/              # Portfolio management
│
├── hooks/                      # Custom React hooks
├── store/                      # Redux/Zustand store configuration
├── services/                   # API service functions
├── utils/                      # Utility functions
├── types/                      # TypeScript type definitions
├── styles/                     # Global styles and Tailwind config
│
├── public/                     # Static assets
├── tests/                      # Test files
└── docs/                       # Documentation
```

## 🔌 **API Integration**

### **Primary Data Sources**
- **CoinGecko API** - Comprehensive cryptocurrency data
- **CoinMarketCap API** - Market cap and volume data
- **CryptoCompare API** - Historical price data

### **API Endpoints**
```javascript
// Market data
GET /api/v3/coins/markets
GET /api/v3/coins/{id}
GET /api/v3/coins/{id}/history

// Price data
GET /api/v3/simple/price
GET /api/v3/coins/{id}/market_chart

// Trending data
GET /api/v3/search/trending
GET /api/v3/global
```

### **Rate Limiting**
- **Free Tier**: 50 calls/minute
- **Pro Tier**: 500 calls/minute
- **Caching Strategy**: 5-minute cache for market data

## 🌐 **Deployment**

### **Vercel Deployment**
1. **Connect repository** to Vercel dashboard
2. **Configure environment variables** in Vercel settings
3. **Deploy automatically** on every push to main branch

```bash
# Manual deployment
vercel --prod
```

### **Netlify Deployment**
1. **Build the application:**
   ```bash
   npm run build
   npm run export
   ```

2. **Deploy to Netlify:**
   ```bash
   netlify deploy --prod --dir=out
   ```

### **AWS Deployment**
- **S3 + CloudFront** for static hosting
- **Lambda functions** for API routes
- **Route 53** for custom domain

## 🧪 **Testing**

### **Unit Testing**
```bash
npm run test
# or
yarn test
```

### **E2E Testing**
```bash
npm run test:e2e
# or
yarn test:e2e
```

### **Performance Testing**
```bash
npm run lighthouse
```

## 🚀 **Performance Optimization**

- **Next.js Image Optimization** for faster loading
- **Code Splitting** for reduced bundle size
- **Server-Side Rendering** for better SEO
- **Caching Strategy** for API responses
- **Lazy Loading** for components and images

## 🤝 **Contributing**

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

### **Code Standards**
- Follow **ESLint** and **Prettier** configurations
- Write **TypeScript** for all new code
- Include **unit tests** for new features
- Update **documentation** for API changes

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 **Author**

**Suraj Ghosh** - *Frontend Developer*
- GitHub: [@SG-Dcoder](https://github.com/SG-Dcoder)
- LinkedIn: [sg-dcoder](https://linkedin.com/in/sg-dcoder)
- Email: surajghosh2724@gmail.com

## 🙏 **Acknowledgments**

- **Groww** for the assignment opportunity
- **CoinGecko API** for comprehensive cryptocurrency data
- **Next.js team** for the amazing framework
- **Tailwind CSS** for utility-first styling approach



### ⭐ **If you found this project helpful, please give it a star!**

**Built for Groww Front-End Assignment Review Round**

