# Software Requirements Specification Document

## System Design

- **Application Type**: Web-based application built with Next.js
- **User Interfaces**:
    - Landing Page
    - Home Dashboard
    - Pre-Conversation Preparation Screen
    - Conversation Simulator
    - Review Screen
- **Primary Features**:
    - AI-powered voice interaction
    - Video playback with synchronization
    - Scenario selection
    - Speech recognition and processing
    - Randomized conversation outcomes

## Architecture Pattern

- **Frontend Pattern**: Component-based architecture using React
- **Application Pattern**: Next.js App Router (for page routing and server components)
- **Design Pattern**: Container-Presentation pattern
    - Container components: Handle logic and state
    - Presentation components: Handle rendering UI elements
- **Communication Pattern**: Event-driven for user interactions
- **Deployment Pattern**: Static generation with client-side interactivity

## State Management

- **Local Component State**: useState hooks for component-specific state
- **Application State**: React Context API for app-wide state
    - UserContext: Track user progress, preferences
    - ScenarioContext: Track current scenario state
    - ConversationContext: Track conversation flow
- **State Persistence**: Server-side database for saving user progress and account information
- **State Transitions**:
    - Idle → Listening → Processing → Response → Idle
    - Scenario Selection → Preparation → Conversation → Review → Dashboard

## Data Flow

- **User Input Flow**:
    1. User microphone input → Speech-to-text conversion → Text analysis
    2. Text processed by conversation logic → AI response generated
    3. Response sent to voice synthesis → Audio played with synchronized video
- **Scenario Flow**:
    1. User selects scenario → Configuration loaded → Preparation screen displayed
    2. Conversation begins → Multiple exchange iterations → Outcome determined
    3. Conversation concludes → Results displayed → Options presented
- **State Persistence Flow**:
    1. User progress captured → Sent to server API → Stored in database
    2. Progress retrieved from server on login → Metrics calculated → Dashboard updated with current progress
    3. Real-time updates synchronized between client and server

## Technical Stack

- **Frontend**:
    - HTML5, CSS3, JavaScript (ES6+)
    - React 18+ (Component framework)
    - Next.js 14+ (React framework with app router)
    - Tailwind CSS (Styling)
- **Backend**:
    - Next.js API routes (Server-side logic)
    - Node.js (Runtime environment)
    - Express.js (Optional middleware for complex API requirements)
- **Backend Functionality**:
    - Speech-to-text processing
    - Conversation logic
    - Response generation
    - User authentication
    - Data persistence
- **Database**:
    - MongoDB (NoSQL database for flexible data structure)
    - Mongoose (ODM for MongoDB)
- **APIs & Services**:
    - Web Speech API (Browser-based speech recognition)
    - Text-to-Speech API (Voice synthesis)
    - Database service (MongoDB, PostgreSQL, or similar)
    - Server-side API for user data persistence
- **Development Tools**:
    - Cursor (IDE with Claude 3.7 integration)
    - Git (Version control)
    - ESLint & Prettier (Code quality)

## Authentication Process

- **User Registration**:
    - Simple email/password registration
    - Optional social login (Google, GitHub)
- **Authentication Flow**:
    1. User enters credentials → Validation performed → JWT token generated
    2. Token stored in browser → Authenticated state maintained
    3. Token refreshed as needed → Logout clears token
- **Required Authentication**:
    - Full authentication required to access app functionality
    - No guest mode available
- **Security Considerations**:
    - HTTPS for all communications
    - Secure cookie storage for authentication tokens
    - CSRF protection for API requests

## Route Design

- **/**: Landing page with value proposition
- **/auth**: Authentication pages (login/register)
- **/dashboard**: Home dashboard with scenario selection
- **/scenarios/:id**: Specific scenario preparation
- **/conversation/:id**: Active conversation simulator
- **/review/:id**: Post-conversation review
- **/profile**: User profile and settings
- **/api/**: API routes for backend functionality
    - **/api/auth/**: Authentication endpoints
    - **/api/speech/**: Speech processing endpoints
    - **/api/scenarios/**: Scenario data endpoints

## API Design

- **Authentication Endpoints**:
    - `POST /api/auth/login`: Authenticate user
    - `POST /api/auth/register`: Create new user
    - `GET /api/auth/user`: Get current user data
- **Scenario Endpoints**:
    - `GET /api/scenarios`: List available scenarios
    - `GET /api/scenarios/:id`: Get specific scenario details
    - `POST /api/scenarios/:id/start`: Initialize conversation
- **Conversation Endpoints**:
    - `POST /api/conversation/process`: Process user speech input
    - `GET /api/conversation/response`: Get AI response
    - `POST /api/conversation/end`: End conversation and get result
- **User Progress Endpoints**:
    - `GET /api/user/progress`: Get user progress data
    - `POST /api/user/progress`: Update user progress

## Database Design ERD

- **Users Table**:
    - id (PK): UUID
    - email: String (unique)
    - password_hash: String
    - created_at: Timestamp
    - last_login: Timestamp
- **Scenarios Table**:
    - id (PK): UUID
    - name: String
    - description: String
    - difficulty: Enum (Beginner, Intermediate, Advanced)
    - location_type: String
    - image_url: String
- **ConversationResponses Table**:
    - id (PK): UUID
    - scenario_id (FK): UUID
    - trigger_phrase: String
    - response_text: String
    - video_segment: String
    - outcome_type: Enum (Neutral, Positive, Negative)
- **UserProgress Table**:
    - id (PK): UUID
    - user_id (FK): UUID
    - scenario_id (FK): UUID
    - completed: Boolean
    - outcome: Enum (Success, Failure)
    - attempt_count: Integer
    - last_attempt: Timestamp
- **Relationships**:
    - Users 1:N UserProgress
    - Scenarios 1:N UserProgress
    - Scenarios 1:N ConversationResponses