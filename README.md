# Spelling Checker App

A simple React application that checks spelling and automatically corrects common mistakes as the user types. The app uses a custom dictionary to detect incorrect words and replace them with the correct spelling.

## 🚀 Features

- Real-time spelling correction
- User-friendly interface
- Built with React and TypeScript
- Uses a custom dictionary for word correction
- Lightweight and fast

## 🛠️ Technologies Used

- React
- TypeScript
- CSS

## 📖 How It Works

1. The user types text into the textarea.
2. The application checks each word against a predefined dictionary.
3. If a word is misspelled, the app replaces it with the correct spelling.
4. The corrected text is displayed instantly.

Example:

Input:

```
I wrok fot this exampl
```

Output:

```
I work for this example
```

## 📂 Project Structure

```
src/
 ├── components/
 ├── dictionary/
 │    └── customDictionary.ts
 ├── App.tsx
 ├── index.tsx
 └── styles.css
```

## 📦 Installation

Clone the repository:

```
git clone https://github.com/your-username/spell-checker-app.git
```

Go to the project folder:

```
cd spell-checker-app
```

Install dependencies:

```
npm install
```

Run the project:

```
npm run dev
```

## 🎯 Future Improvements

- Add a larger dictionary
- Highlight incorrect words
- Support multiple languages
- Add suggestion dropdown for corrections

---

Made with ❤️ using React and TypeScript.
