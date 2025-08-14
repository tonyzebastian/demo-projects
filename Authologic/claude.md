# Identity Verification Process - Implementation Guide

## Overview
A two-step identity verification flow with country selection followed by ID verification method selection, featuring a visual stepper component to guide users through the process.

## Component Architecture

### Required Libraries
- **React** (functional components with hooks)
- **Tailwind CSS** for styling
- **Lucide React** for UI icons
- **shadcn/ui** for form elements and buttons
- **Flag Icons** from `country-flag-icons` or `react-country-flag` for country flags
- **React Step Wizard** or **React Stepper Horizontal** for the stepper component
- **Noto Sans** font family (Google Fonts)

### Step Components Structure

```
IdentityVerificationFlow/
├── components/
│   ├── Stepper.js
│   ├── CountrySelection.js
│   ├── VerificationMethod.js
│   ├── SuccessState.js
│   └── Layout.js
└── IdentityVerificationFlow.js (main container)
```

## Design System

### Typography
- **Font Family**: Noto Sans (imported from Google Fonts)
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- **Implementation**: `font-['Noto_Sans']` in Tailwind classes

### Color Palette (Tailwind Slate Colors)
- **Primary Text**: `text-slate-900` (headings, important text)
- **Secondary Text**: `text-slate-700` (body text, descriptions)
- **Muted Text**: `text-slate-500` (placeholders, helper text)
- **Light Text**: `text-slate-400` (disabled states)
- **Borders**: `border-slate-200` (default), `border-slate-300` (hover)
- **Backgrounds**: 
  - Primary: `bg-white`
  - Secondary: `bg-slate-50`
  - Hover: `bg-slate-100`
  - Selected: `bg-slate-900` with `text-white`
- **Accent Color**: `bg-green-600` and `text-green-600` for primary actions and success states

## Step 1: Country Selection

### UI Components Needed

#### Header Section
- **Logo**: LOOP logo positioned top-left (`text-slate-900`)
- **Security Badge**: "Secure identity verification" text with lock icon (Lucide: `Shield`)
  - Text: `text-slate-600 text-sm font-['Noto_Sans']`
  - Icon: `text-slate-500`

#### Main Content
- **Stepper with Title**: Progress indicator containing "Choose your country"
  - Title: `text-slate-900 text-lg font-semibold font-['Noto_Sans']`
- **Main Title**: "Select your country of residence"
  - Style: `text-slate-700 text-2xl font-medium font-['Noto_Sans']`
- **Search Bar**: 
  - Input field with search icon (Lucide: `Search`)
  - Placeholder: "Search for countries" (`text-slate-400`)
  - Border: `border-slate-200 focus:border-slate-300`
  - Background: `bg-white`
  - Real-time filtering functionality

#### Country Lists

**Most Popular Countries Section**
- Section title: `text-slate-700 text-lg font-medium font-['Noto_Sans'] mb-4`
- Grid layout (2x3 on desktop, 2x2 on mobile)
- Each country button contains:
  - Country flag icon (left)
  - Country name (right) - `text-slate-900 font-['Noto_Sans']`
  - Default: `bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300`
  - Selected: `bg-slate-900 text-white border-slate-900`
  - Hover effects and selection states

**All Countries Section**
- Section title: `text-slate-700 text-lg font-medium font-['Noto_Sans'] mb-4`
- Grid layout (4 columns on desktop, 2 on mobile)
- Alphabetically sorted
- Same button structure and styling as popular countries

**Empty State** (when search returns no results)
- Centered message with icon (Lucide: `SearchX`) - `text-slate-400`
- "No countries found" text - `text-slate-700 text-lg font-medium font-['Noto_Sans']`
- "Try adjusting your search" subtitle - `text-slate-500 font-['Noto_Sans']`

#### Bottom Actions
- **Cancel Button**: Left side, secondary styling
  - `bg-white text-slate-700 border-slate-200 hover:bg-slate-50 font-['Noto_Sans']`
- **Proceed Button**: Right side, disabled until country selected, primary styling
  - Enabled: `bg-green-600 text-white hover:bg-green-700 font-['Noto_Sans']`
  - Disabled: `bg-slate-200 text-slate-400 font-['Noto_Sans']`

### Technical Requirements
- Search functionality with debounced input (300ms delay)
- Country data structure: `{ code: 'IN', name: 'India', flag: '🇮🇳' }`
- Responsive grid system using Tailwind CSS Grid
- Selected state management with visual feedback

## Step 2: Verification Method Selection

### UI Components Needed

#### Header Section
- Same layout as Step 1 (logo and security badge with same styling)

#### Main Content
- **Stepper with Title**: Progress indicator containing "Identity verification"
  - Title: `text-slate-900 text-lg font-semibold font-['Noto_Sans']`
- **Main Title**: "Select your favourite ID verification method"
  - Style: `text-slate-700 text-2xl font-medium font-['Noto_Sans']`

#### Verification Options

**Photo ID Card Option**:
- Large rectangular card
  - Default: `bg-white border-slate-200 hover:border-slate-300`
  - Selected: `border-green-600 bg-green-50`
- ID card icon (Lucide: `CreditCard` or `IdCard`) - `text-slate-600`
- "Photo of an ID" text - `text-slate-900 font-semibold font-['Noto_Sans']`
- Information section:
  - "1-3 min verification time" - `text-slate-500 text-sm font-['Noto_Sans']`
  - **"Photo of an ID - checklist before you start:"** - `text-slate-700 font-medium font-['Noto_Sans']`
  - Bullet point with light bulb icon (Lucide: `Lightbulb`): "Prepare good lighting conditions" - `text-slate-600 font-['Noto_Sans']`
  - Bullet point with credit card icon (Lucide: `CreditCard`): "Prepare a valid identity document" - `text-slate-600 font-['Noto_Sans']`

**Yoti Option**:
- Large rectangular card (same size as Photo ID) with same styling structure
- Yoti logo/icon - `text-slate-600`
- "Yoti" text - `text-slate-900 font-semibold font-['Noto_Sans']`
- Information section:
  - "Very fast verification" - `text-slate-500 text-sm font-['Noto_Sans']`
  - **"YOTI - checklist before you start:"** - `text-slate-700 font-medium font-['Noto_Sans']`
  - Bullet point with smartphone icon (Lucide: `Smartphone`): "Install YOTI app on your smartphone" - `text-slate-600 font-['Noto_Sans']`
  - QR code display with text: "Show a QR code to scan and download, ask ios or android" - `text-slate-600 font-['Noto_Sans']`

#### Bottom Actions
- **Cancel Button**: Left side, secondary styling
  - `bg-white text-slate-700 border-slate-200 hover:bg-slate-50 font-['Noto_Sans']`
- **Back Button**: Center-left, with arrow icon (Lucide: `ArrowLeft`)
  - `bg-white text-slate-700 border-slate-200 hover:bg-slate-50 font-['Noto_Sans']`
- **Start Verification Button**: Right side, enabled when method selected
  - Enabled: `bg-green-600 text-white hover:bg-green-700 font-['Noto_Sans']`
  - Disabled: `bg-slate-200 text-slate-400 font-['Noto_Sans']`

## Step 3: Success State

### UI Components Needed

#### Header Section
- Same layout as previous steps (logo and security badge with consistent styling)

#### Main Content
- **Success Icon**: Large checkmark or success icon (Lucide: `CheckCircle`) - `text-green-600`
- **Success Title**: "Verification Complete!" - `text-slate-900 text-2xl font-semibold font-['Noto_Sans']`
- **Success Message**: "Your identity has been successfully verified" - `text-slate-600 font-['Noto_Sans']`

#### Bottom Actions
- **Done Button**: Center, primary styling - `bg-green-600 text-white hover:bg-green-700 font-['Noto_Sans']`

## Stepper Component Specification

### Visual Design
- Horizontal stepper with 2 steps
- Step indicators: numbered circles (1, 2)
  - Active state: `bg-green-600 text-white`
  - Completed state: `bg-green-600 text-white` with checkmark
  - Inactive state: `bg-white border-slate-300 text-slate-500`
- Progress line between steps: `bg-slate-200` (inactive), `bg-green-600` (completed)
- **Step titles integrated**: "Choose your country" and "Identity verification"
  - Active: `text-slate-900 font-medium font-['Noto_Sans']`
  - Inactive: `text-slate-500 font-['Noto_Sans']`

### State Management
```javascript
const steps = [
  { id: 1, title: "Choose your country", completed: false, active: true },
  { id: 2, title: "Identity verification", completed: false, active: false },
  { id: 3, title: "Complete", completed: false, active: false }
];
```

## Data Structures

### Country Data
```javascript
const countries = {
  popular: [
    { code: 'IN', name: 'India', flag: 'IN' },
    { code: 'FR', name: 'France', flag: 'FR' },
    { code: 'DE', name: 'Germany', flag: 'DE' },
    { code: 'PL', name: 'Poland', flag: 'PL' },
    { code: 'GB', name: 'United Kingdom', flag: 'GB' },
    { code: 'US', name: 'United States of America', flag: 'US' }
  ],
  all: [
    // Complete list of countries alphabetically sorted
  ]
};
```

### Verification Methods
```javascript
const verificationMethods = [
  {
    id: 'photo-id',
    name: 'Photo of an ID',
    icon: 'CreditCard',
    estimatedTime: '1-3 min verification time',
    checklist: [
      { icon: 'Lightbulb', text: 'Prepare good lighting conditions' },
      { icon: 'CreditCard', text: 'Prepare a valid identity document' }
    ]
  },
  {
    id: 'yoti',
    name: 'Yoti',
    icon: 'Shield',
    estimatedTime: 'Very fast verification',
    checklist: [
      { icon: 'Smartphone', text: 'Install YOTI app on your smartphone' }
    ],
    qrCode: true,
    qrCodeText: 'Show a QR code to scan and download, ask ios or android'
  }
];
```

## Responsive Design Breakpoints

### Mobile (< 768px)
- Single column layout for country grid
- Stacked verification method cards
- Full-width buttons
- Condensed stepper design

### Tablet (768px - 1024px)
- 2-column country grid
- Side-by-side verification methods
- Adjusted padding and margins

### Desktop (> 1024px)
- 4-column country grid for "All countries"
- 2x3 grid for "Most popular"
- Full layout as shown in wireframes

## State Management

### React Hooks Usage
- `useState` for current step tracking
- `useState` for selected country
- `useState` for selected verification method
- `useState` for search query
- `useEffect` for search filtering
- `useMemo` for filtered country lists

### Navigation Flow
1. User selects country → Enable "Proceed" button
2. User clicks "Proceed" → Navigate to Step 2, update stepper state
3. User can click "Back" → Return to Step 1, maintain previously selected country
4. User selects verification method → Enable "Start verification" button
5. User clicks "Start verification" → Show success state
6. User clicks "Done" → Complete flow

## Accessibility Requirements

### ARIA Labels
- Stepper component with `role="progressbar"`
- Country buttons with `aria-label` including country names
- Search input with `aria-describedby` for instructions
- Form sections with proper heading hierarchy
- Success state with appropriate announcements

### Keyboard Navigation
- Tab order: Search → Popular countries → All countries → Bottom buttons
- Enter/Space to select countries and methods
- Arrow keys for grid navigation
- Focus indicators on all interactive elements

### Screen Reader Support
- Announcements for step changes
- Live region updates for search results
- Empty state announcements
- Success state announcements
