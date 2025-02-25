## 1. Elevator Pitch

A web-based application designed to help men aged 16-35 overcome social anxiety when approaching women by providing realistic conversation simulations. Users practice initiating conversations with an AI-powered voice bot in various common settings, complete with video interaction to help build eye contact comfort. The app offers randomized responses to create natural unpredictability, with the ultimate goal of helping users gain confidence in real-world social interactions.

## 2. Who is this app for

- Primary users: Men aged 16-35 who experience anxiety or hesitation when initiating conversations with women
- Specific demographics:
    - Individuals with social anxiety in dating contexts
    - Men who want to improve their conversation skills
    - Users who struggle with maintaining eye contact during conversations
    - Individuals seeking a safe environment to practice social interactions

## 3. Functional Requirements

- **AI Voice Interaction**: Responsive voice bot that simulates realistic conversations
- **Scenario Selection**: Multiple environments for practice (cafe, park, etc.)
- **Video Component**: Pre-recorded video of a woman that shows appropriate facial reactions
    - Idle state (blinking, waiting for response)
    - Speaking state (mouth movements synchronized with audio)
- **Randomized Outcomes**:
    - 10% immediate rejection scenarios ("I have a boyfriend")
    - 70% conversation scenarios that lead to success or failure based on user responses
    - 20% positive scenarios (successful number exchange)
- **Conversation Flow**: Natural dialogue progression with branching paths based on user's responses
- **Success Metric**: Primary goal of obtaining contact information from the simulated conversation partner

## 4. User Stories

- **Scenario Selection**: "As a user, I want to select from different locations so I can practice conversations in contexts relevant to my life."
- **Conversation Initiation**: "As a user, I want to start a conversation with the AI to practice my opening lines and build confidence."
- **Handling Rejection**: "As a user, I want to experience rejection scenarios so I can learn to handle them gracefully in real life."
- **Extended Dialogue**: "As a user, I want to have multi-turn conversations that feel realistic and challenging."
- **Success Experience**: "As a user, I want to occasionally succeed in getting a phone number so I can build positive reinforcement."
- **Eye Contact Practice**: "As a user, I want to practice maintaining eye contact during conversations to improve my non-verbal communication skills."

## 5. User Interface

- **Home Screen**:
    - Scenario selection menu with visual representations of each location
    - Brief tutorial/instructions for new users
    - Option to adjust voice volume/settings
- **Conversation Screen**:
    - Central video display showing the conversation partner
    - User microphone input indicator
    - Minimal text interface to keep focus on the video interaction
    - Optional conversation hints or suggestions in early levels
- **Results Screen**:
    - Feedback on conversation outcome
    - Option to retry the scenario or choose a new one
    - Future feature placeholder for performance metrics/improvement tracking

## 6. Suggestions for Further Development(Ignore For Now)

- **Feedback System**: Implement basic feedback on conversation flow, pacing, and content
- **Difficulty Progression**: Create a structured learning path from basic to advanced scenarios
- **Custom Scenarios**: Enable users to set up specific situations they want to practice
- **Voice Analysis**: Future integration of tone and confidence analysis in user's voice
- **Mobile Version**: Develop a mobile application version for practice on-the-go
- **Community Features**: Add the ability to share success stories or tips with other users
- **Premium Content**: Consider additional specialized scenarios for premium subscribers

## 7. Technical Considerations

- **Voice Recognition**: Implement robust speech-to-text functionality
- **Video Integration**: Ensure seamless synchronization between AI responses and video playback
- **Performance Optimization**: Focus on minimizing lag between user input and AI response
- **Accessibility**: Consider options for users with hearing or speech impairments
- **Data Privacy**: Clear policies on how voice data is used and stored