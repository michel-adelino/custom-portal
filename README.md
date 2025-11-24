# Staff Portal - Internal Business System

A comprehensive frontend-only staff portal for managing various business operations including organization, sales, finance, scheduling, production, marketing, and individual performance.

## Features

- **Multi-Module System**: Complete coverage of business operations
  - 🏢 Organisation (Vision, Mission, Roadmaps, Meetings, Training)
  - ⚙️ Systems & Processes (Knowledge Centre, SOPs, Issue Tracking)
  - 📊 Sales CRM (Leads, Quotes, Pipeline, Deals)
  - 💰 Finance (Invoices, Bills, Expenses, Cashflow)
  - 📅 Scheduling & Communications (Job Scheduling, Customer Communications)
  - 🏭 Production (Queue, Status, Inventory, Stock Management)
  - 📱 Marketing (Content Calendar, Campaigns, Social Media)
  - 🎯 Individual Performance (KPIs, To-Dos, Reviews, Growth Plans)

- **User Authentication**: Frontend-only authentication with role-based access
  - Owner, Manager, and Staff roles
  - Session persistence using localStorage

- **Call & SMS Logging**: 
  - Make calls and send SMS directly from the portal
  - All communications are logged with timestamps
  - View communication history in Customer Communications

- **Dashboards**:
  - Department-specific dashboards
  - Owner reporting dashboard
  - Activity tracking and statistics

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Login Credentials

For demo purposes, you can use any of these email addresses (any password will work):

- `owner@company.com` - Owner role
- `manager@company.com` - Manager role  
- `staff@company.com` - Staff role

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── Header.tsx       # Top header with call/SMS buttons
│   └── Layout.tsx       # Main layout wrapper
├── context/             # React contexts
│   ├── AuthContext.tsx  # Authentication state
│   └── CallLogContext.tsx # Call/SMS logging
├── pages/               # Page components
│   ├── Dashboard.tsx    # Main dashboard
│   ├── Login.tsx        # Login page
│   ├── organisation/    # Organisation module pages
│   ├── systems/         # Systems & Processes pages
│   ├── sales/           # Sales CRM pages
│   ├── finance/         # Finance pages
│   ├── scheduling/      # Scheduling pages
│   ├── production/      # Production pages
│   ├── marketing/       # Marketing pages
│   └── performance/     # Performance pages
└── types/               # TypeScript type definitions
```

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **date-fns** - Date formatting

## Features in Detail

### Call & SMS Functionality

- Click the "Call" or "SMS" button in the header
- Enter contact name (optional) and phone number
- For SMS, enter your message
- All calls and SMS are automatically logged
- View logs in "Scheduling & Communications > Customer Communications"

### Navigation

- Expandable sidebar with all modules
- Active route highlighting
- Quick access to all business functions

### Data Persistence

All data (user sessions, call logs) is stored in browser localStorage. This means:
- Data persists across page refreshes
- Data is specific to each browser/device
- No backend server required

## Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Development Notes

- This is a **frontend-only** application
- All workflows and data are handled on the client side
- No backend API is required
- Perfect for prototyping and demonstration purposes

## License

This project is for internal business use.

