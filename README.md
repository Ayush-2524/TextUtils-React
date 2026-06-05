# TextUtils - Text Manipulation Utility

TextUtils is a React-based web application that provides a suite of text manipulation and analysis tools. It features a clean, user-friendly interface with light and dark mode support.

## 🎯 Features

### Text Transformation
- **Convert to Uppercase** - Transform all text to uppercase letters
- **Convert to Lowercase** - Transform all text to lowercase letters
- **Clear Text** - Quickly clear all text from the editor
- **Copy to Clipboard** - Copy the edited text with a single click
- **Remove Extra Spaces** - Clean up multiple spaces between words
- **Reverse Words** - Reverse the order of words in your text

### Text Analysis
- **Word Count** - Real-time word count display
- **Character Count** - Total character count including spaces
- **Reading Time** - Estimated reading time based on average reading speed
- **Live Preview** - See a preview of your text as you type

### Additional Features
- **Dark/Light Mode Toggle** - Switch between themes for comfortable viewing
- **Real-time Alerts** - Visual notifications for all text operations
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **About Page** - Information page with accordion-style content

## 🛠️ Tech Stack

- **React** (v19.2.6) - UI framework
- **React Router DOM** (v6.30.3) - Navigation and routing
- **Bootstrap** - Responsive styling and components
- **React Scripts** (v5.0.1) - Build and development tools

## 📦 Project Structure

```
src/
├── App.js                 # Main application component
├── App.css               # Application styles
├── index.js              # Entry point
├── components/
│   ├── TextForm.js       # Main text editor component
│   ├── Alert.js          # Alert notification component
│   ├── Navbar.js         # Navigation bar with dark mode toggle
│   └── About.js          # About page with accordion
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd textutils
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

#### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) in your browser.\
The page reloads automatically when you make changes.

#### `npm run build`
Builds the app for production in the `build` folder.\
The build is minified and optimized for best performance.

#### `npm test`
Launches the test runner in interactive watch mode.\
See the [Create React App testing guide](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run deploy`
Deploys the app to GitHub Pages (requires gh-pages configuration).

## 💡 Usage

1. **Type or paste text** into the text editor
2. **Select an action** from the available buttons to transform your text
3. **View the results** in the preview section and in the editor
4. **Monitor statistics** - word count, character count, and reading time update in real-time
5. **Toggle dark mode** using the switch in the navigation bar for comfortable viewing

## 🎨 Dark Mode

The application includes a built-in dark mode toggle in the navbar. Switch between light and dark themes instantly while preserving your text and work.

## 📝 Example Operations

- Convert "hello world" to "HELLO WORLD"
- Count words and characters in your documents
- Remove unnecessary spacing in formatted text
- Quickly copy processed text to clipboard
- Estimate reading time for content

## 🔄 Project Status

This project is part of a React learning course and serves as a practical demonstration of React concepts including:
- State management with hooks (useState)
- Component composition
- Event handling
- Conditional rendering
- Dark mode implementation

## 📄 License

This project is open source and available for learning and development purposes.

## 🤝 Contributing

Feel free to fork, modify, and enhance this project for your learning or personal use.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
