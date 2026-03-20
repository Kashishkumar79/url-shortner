<<<<<<< HEAD
# url-shortener
=======
# 🔗 URL Shortener

A simple and efficient URL Shortener built using **Node.js, Express, and MongoDB**.
This project allows users to convert long URLs into short, easy-to-share links.

---

## 🚀 Features

* 🔹 Generate short URLs from long links
* 🔹 Redirect to original URL using short link
* 🔹 REST API based architecture
* 🔹 MongoDB database integration
* 🔹 Clean MVC folder structure

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Tools:** Nodemon, Git

---

## 📁 Project Structure

```
url-shortner/
│
├── controllers/
│   └── url.js
│
├── models/
│   └── url.js
│
├── routes/
│   └── url.js
│
├── config/
│   └── connect.js
│
├── index.js
├── package.json
└── .gitignore
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/url-shortner.git
```

2. Navigate to project folder

```
cd url-shortner
```

3. Install dependencies

```
npm install
```

4. Create `.env` file and add:

```
MONGODB_URL=your_mongodb_connection_string
PORT=3000
```

5. Run the server

```
npm start
```

---

## 📌 API Endpoints

### ➤ Create Short URL

```
POST /url
```

**Body:**

```
{
  "url": "https://example.com"
}
```

---

### ➤ Redirect to Original URL

```
GET /:shortId
```

---

## 🧠 Learnings

* Understanding of MVC architecture
* Working with MongoDB and Mongoose
* Building REST APIs using Express
* Handling routing and controllers

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Kashish Kumar**

* 💼 Full Stack Developer
* 🚀 Passionate about Backend & APIs

---

⭐ If you like this project, don’t forget to star the repository!
>>>>>>> ee6fea11b17ef63509cb2f201f17db66062407bf
