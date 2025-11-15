# Rock-Paper-Scissors React Game

An interactive Rock-Paper-Scissors game built with React, featuring smooth animations and score tracking.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Navigate to the URL displayed in the terminal (typically `http://localhost:5173`)

## How to Play

1. Click on one of the three images (rock, paper, or scissors) to make your selection
2. Watch as the computer shuffles through options for 3 seconds
3. The result will be displayed showing whether you won, lost, or tied
4. Your score is tracked across rounds
5. Click the "Reset Game" button to clear the score and start fresh

## Component Structure

- **App**: Root component managing overall game state and logic
- **PlayerThrow**: Displays clickable images for user selection with visual feedback
- **ComputerThrow**: Animates and reveals computer's random choice
- **ResultDisplay**: Shows the outcome of each round (win/lose/tie)
- **ScoreBoard**: Tracks and displays wins, losses, and ties
- **ResetButton**: Allows users to reset the game state and score

## Implementation Reflection

This project demonstrates key React concepts including:

- **State Management**: Using `useState` to manage player selection, computer choice, game status, animation state, and score
- **Side Effects**: Leveraging `useEffect` to trigger computer selection and animation after player choice
- **Component Composition**: Breaking down the UI into reusable, focused components
- **Event Handling**: Processing user clicks and keyboard interactions
- **Conditional Rendering**: Displaying results only when appropriate
- **CSS Modules**: Organizing styles per component for better maintainability

The shuffle animation creates suspense by cycling through options every 500ms for 3 seconds before revealing the computer's final choice. Game logic accounts for all 9 possible throw combinations to determine the winner accurately.

## Technologies Used

- React 18
- Vite (build tool)
- CSS3 for styling and animations