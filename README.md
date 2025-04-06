# NoteApp
# 📝 Notes Web App

A simple and clean note-taking web application built using **Flask**, **HTML & CSS**, **SQLAlchemy**, and **Flask-Login**. This app allows users to register, log in, and create personal notes with a modern Pinterest-style layout.

---

## 🚀 Features

- 🔐 User Authentication (Sign Up, Login, Logout)
- 📒 Create, View & Delete Personal Notes
- 🧾 Each note includes a **title** and **content**
- 📄 Responsive two-column layout (Input form + Notes cards)
- 📎 Sticky note form section and scrollable notes area
- 🎨 Clean, minimal, and mobile-friendly UI using Bootstrap & custom SCSS

---

## 🛠 Tech Stack

| Technology     | Purpose                         |
|----------------|----------------------------------|
| Flask          | Backend web framework            |
| Jinja2         | Template rendering                |
| Flask-Login    | User authentication               |
| SQLAlchemy     | ORM for database interaction      |
| SQLite         | Lightweight local database        |
| Bootstrap 4    | Frontend layout and styling       |
| SCSS / CSS     | Custom styling                    |
| JavaScript     | Deleting notes with async call    |

---

## 📸 Screenshots
> _Modern Login and Sign Up form_
![Login page](/Screenshot/login.png)

> _Modern layout with form on left and scrollable notes on right._
![Home Page Layout](/Screenshot/note%20ss.png)



---

## 🧑‍💻 Getting Started

1. **Clone the repository**

```bash
git clone this repo
cd NoteApp
```

2. **Create a virtual environment & activate it**

```bash
python -m venv venv
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Run the app**

```bash
python main.py
```

App will run at: `http://127.0.0.1:5000/`

---

## 🙌 Credits

Built with ❤️ by **Raman Yadav**  


---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
