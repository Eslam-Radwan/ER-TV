# ER-TV Project Documentation

## 📌 Project Overview
**ER-TV** is a web application that allows users to browse, search, and manage their favorite movies and TV shows using the TMDB API. It provides user authentication, personalized watchlists, reviews, and filtering/sorting options.

## 🚀 Features
- **User Authentication** (Login, Signup, Profile Management)
- **Movie & TV Show Listings** (Trending, Popular, Upcoming)
- **Search with Autocomplete**
- **Advanced Filtering & Sorting**
- **Movie/TV Show Details** (Cast, Reviews, Watch Providers)
- **User Watchlist & Favorites** (Add/Remove Items)
- **CRUD Reviews**
- **User Profile Management** (Edit Profile Info)
- **Optimized Performance with Webpack**

## 📂 File Structure
```
ER-TV/
├── eslint.config.mjs
├── FULL_DOC.md
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── assets
│   │   ├── Icons
│   │   ├── Images
│   │   ├── scripts
│   │   │   ├── api.js
│   │   │   ├── auth.js
│   │   │   ├── favorites.js
│   │   │   ├── main.js
│   │   │   ├── reviews.js
│   │   │   ├── router.js
│   │   │   ├── storage.js
│   │   │   ├── ui.js
│   │   │   ├── utils.js
│   │   │   └── watchlist.js
│   │   └── styles
│   │       └── style.css
│   ├── components
│   │   ├── card.js
│   │   ├── footer.js
│   │   ├── header.js
│   │   └── modal.js
│   ├── dist
│   │   └── index.html
│   ├── login.html
│   ├── movieDetail.html
│   ├── movies.html
│   ├── profile.html
│   ├── signup.html
│   ├── tvDetail.html
│   └── tv.html
├── __tests__
└── webpack.config.js
```

## 📜 Webpack Configuration
### **Installation**
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin eslint-webpack-plugin babel-loader @babel/core @babel/preset-env style-loader css-loader file-loader
```
### **Configuration (`webpack.config.js`)**
```js
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

export default {
  entry: "./src/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|jpg|jpeg|svg|gif)$/i, type: "asset/resource" },
    ],
  },
  devServer: {
    static: "./dist",
    open: true,
    port: 3000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({ extensions: ["js"] }),
  ],
};
```

## 🧪 Testing with Jest
### **Installation**
```bash
npm install --save-dev jest
```
### **Configuration (`package.json`)**
```json
"scripts": {
  "test": "jest"
}
```
### **Test File Structure (`__tests__/api.test.js`)**
```js
import { fetchPopularMovies } from "../src/scripts/api/tmdb";

test("fetchPopularMovies should return movie data", async () => {
  const movies = await fetchPopularMovies();
  expect(movies).toBeDefined();
});
```

## 🔍 ESLint Integration
### **Installation**
```bash
npm install --save-dev eslint eslint-webpack-plugin
```
### **Configuration (`.eslintrc.js`)**
```js
export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
  },
};
```
### **Run ESLint**
```bash
npm run lint
```

## 🔄 GitHub Actions for CI/CD
### **Workflow File (`.github/workflows/ci.yml`)**
```yaml
name: Webpack CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install Dependencies
        run: npm install
      - name: Run Webpack Build
        run: npm run build
      - name: Run Tests
        run: npm run test
```

## 📌 Git Branching Strategy
| **Branch Name** | **Description** |
|----------------|---------------|
| `main`        | Production-ready branch |
| `develop`     | Ongoing development branch |
| `feature/*`   | New features branch (e.g., `feature/auth`) |
| `bugfix/*`    | Bug fixes (e.g., `bugfix/ui-glitch`) |
| `hotfix/*`    | Urgent production fixes |

## 📅 Project Milestones
| **Milestone**          | **Description**                                     | **Deadline** |
| ---------------------- | --------------------------------------------------- | ------------ |
| **M1** Setup           | Initialize project, configure Webpack, Jest, ESLint | Week 1       |
| **M2** Auth            | Implement Login, Signup, Profile                    | Week 2       |
| **M3** Movies & TV     | Display movie and TV listings, search, filter       | Week 3       |
| **M4** User Features   | Watchlist, Favorites, Reviews                       | Week 4       |
| **M5** Testing & CI/CD | Implement Jest, GitHub Actions, Final Fixes         | Week 5       |

## 🛠 Tools & Technologies
- **Frontend**: Vanilla JS, Bootstrap, Webpack
- **Backend**: Node.js (for API proxy if needed)
- **Testing**: Jest
- **Code Quality**: ESLint
- **CI/CD**: GitHub Actions

---
**ER-TV** is structured for maintainability, scalability, and performance optimization. 🚀 Let me know if you need enhancements!

