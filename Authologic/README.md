# Identity Verification Flow

A complete two-step identity verification process built with React, featuring country selection and ID verification method selection with a beautiful stepper interface.

## Features

- **Step 1: Country Selection**
  - Search functionality with real-time filtering
  - Popular countries section
  - Complete alphabetical country list
  - Country flag icons
  - Empty state for no search results

- **Step 2: Verification Method Selection**
  - Photo ID verification option with checklist
  - Yoti verification option with QR code placeholder
  - Detailed information for each method

- **Step 3: Success State**
  - Confirmation screen after verification starts

## Design System

- **Font**: Noto Sans from Google Fonts
- **Colors**: Tailwind CSS Slate color palette
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Country Flags**: react-country-flag

## Project Structure

```
src/
├── components/
│   ├── Layout.js           # Header with logo and security badge
│   ├── Stepper.js          # Progress stepper component
│   ├── CountrySelection.js # Step 1: Country selection with search
│   ├── VerificationMethod.js # Step 2: ID method selection
│   └── SuccessState.js     # Step 3: Success confirmation
├── data/
│   └── countries.js        # Country data and verification methods
├── IdentityVerificationFlow.js # Main container component
├── index.js               # React app entry point
└── index.css             # Tailwind CSS imports
```

## Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Build for Production

```bash
npm run build
```

The build folder will contain the optimized production build.

## Key Features Implemented

### Search Functionality
- Real-time country search with debouncing
- Search by country name or country code
- Empty state when no results found

### Responsive Design
- Mobile-first approach
- Grid layouts that adapt to screen size:
  - Mobile: 1-2 columns
  - Tablet: 2-3 columns  
  - Desktop: 3-4 columns

### Accessibility
- Proper ARIA labels for country selection
- Keyboard navigation support
- Screen reader friendly
- Focus indicators on interactive elements

### State Management
- React hooks for state management
- Maintains selected country when navigating back
- Form validation (buttons disabled until selections made)

## Technologies Used

- **React 18** - UI framework
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Icon library
- **react-country-flag** - Country flag components
- **Noto Sans** - Typography (Google Fonts)
- **Advanced Stepper Component** - Custom stepper with keyboard navigation and accessibility
- **Class Variance Authority** - For component variants
- **Tailwind Merge & clsx** - For conditional styling

## Browser Support

This project supports all modern browsers and is built with Create React App for optimal compatibility.