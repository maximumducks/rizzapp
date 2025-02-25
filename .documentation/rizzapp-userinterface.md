## Layout Structure

The application follows a hierarchical layout structure:

1. **Home Dashboard** - Main navigation hub with sidebar and scenario cards
2. **Pre-Conversation Preparation** - Breathing exercise and countdown
3. **Conversation Simulator** - Full-screen video interaction with minimal controls
4. **Review Screen** - Simple feedback on conversation outcome

## Core Components

### Landing Page

- Hero section with app value proposition and emotional appeal
- Features section highlighting key benefits
- Social proof section (testimonials, success metrics)
- Clear call-to-action button for sign-up/login
- Minimal form fields to reduce friction during registration

### Home Dashboard

- **Sidebar Navigation**:
    - Profile/settings access
    - Progress tracking
    - Scenario categories
    - Help/support access
    - Logout function
- **Scenario Selection Area**:
    - Horizontally scrollable cards
    - High-quality location images on each card
    - Brief scenario description beneath each image
    - Visual indicators for completed/attempted scenarios
    - Clear "Start" button on each card

### Pre-Conversation Preparation

- Fullscreen breathing exercise animation
- Visual countdown timer (3-2-1)
- Simple text prompt for mental preparation
- Option to skip for experienced users
- "I'm Ready" button prominently displayed

### Conversation Simulator

- Full-screen video of conversation partner
- Microphone button (large, central position when inactive)
- Status indicator showing system is listening/processing
- Discreet "End Conversation" button in corner
- Minimal UI elements to maximize immersion

### Review Screen

- Simple, encouraging headline
- Brief summary of what went well
- Option to retry the same scenario
- Option to choose a new scenario
- Simple visual representation of outcome

## Interaction Patterns

### Navigation Flow

- Linear progression through screens with clear forward/back options
- Breadcrumb navigation in sidebar to show progress
- Single-click returns to home dashboard from any screen

### Voice Interaction

1. User clicks microphone button to begin speaking
2. Button transforms to visual indicator showing audio is being recorded
3. Button automatically disables after user stops speaking
4. Loading animation appears while AI processes response
5. Video resumes with AI response
6. Microphone re-enables after AI response completes

### End Conversation Options

- "End Conversation" button visible during simulation
- Confirmation dialog appears when clicked
- Options provided: "End & Review" or "Continue"
- Quick escape with ESC key for immediate exit

## Visual Design Elements & Color Scheme

### Color Palette

- **Primary**: Calm blue (#3D7CF9) - Evokes trust and reduces anxiety
- **Secondary**: Warm orange (#FFA433) - For action buttons and highlights
- **Background**: Light neutral (#F8F9FA) - Clean, distraction-free environment
- **Text**: Dark gray (#333333) - High readability
- **Success**: Soft green (#5CB85C) - For positive reinforcement
- **Accent**: Purple (#7E57C2) - For tips and important information

### Visual Hierarchy

- Bold, clear typography for instructions
- High contrast for interactive elements
- Muted backgrounds during conversation to focus attention on video
- Motion and animation used sparingly to avoid distraction

## Mobile, Web App, Desktop Considerations

### Responsive Design

- **Desktop**: Full layout with sidebar visible at all times
- **Tablet**: Collapsible sidebar, optimized card layout
- **Mobile**: Bottom navigation replacing sidebar, vertical card scrolling instead of horizontal

### Platform Optimizations

- **Web App**: Browser permission handling for microphone access
- **Desktop**: Keyboard shortcuts for power users
- **Mobile**: Touch-optimized buttons (minimum 44×44px touch targets)

### Performance Considerations

- Progressive loading of video content
- Locally cached scenarios to reduce loading times
- Reduced animations on lower-end devices

## Typography

### Font Selection

- **Primary Font**: Roboto - Clean, modern, highly readable at all sizes
- **Heading Font**: Montserrat - Slightly more personality for headings
- **Conversational Text**: Open Sans - Friendly, approachable for instruction text

### Text Hierarchy

- **H1**: 32px, Montserrat Bold - Main screen titles
- **H2**: 24px, Montserrat Medium - Section headings
- **Body**: 16px, Open Sans Regular - Instructions and descriptions
- **Button Text**: 18px, Roboto Medium - Clear call to actions
- **Micro Copy**: 14px, Open Sans Light - Secondary information

## Accessibility

### Visual Accessibility

- High contrast ratio (minimum 4.5:1) for all text  
- Color is never the sole indicator of meaning
- Text size adjustable through browser controls
- All interactive elements have visible focus states

### Interaction Accessibility

- Alternative text input method available alongside voice
- Subtitles/captions for all audio responses
- Keyboard navigation support throughout the application
- Screen reader compatibility with ARIA landmarks

### Cognitive Accessibility

- Clear, simple language in all instructions
- Consistent placement of navigation elements
- Visual cues supplement text instructions
- Progress indication to reduce cognitive load

### Technical Accessibility

- WCAG 2.1 AA compliance as minimum standard
- Regular accessibility audits during development
- Support for screen magnification
- Fallback options for users with slow internet connections