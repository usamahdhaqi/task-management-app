# 📝 Task Management App

![Stars](https://img.shields.io/github/stars/usamahdhaqi/task-management-app?style=social)
![License](https://img.shields.io/github/license/usamahdhaqi/task-management-app)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![npm](https://img.shields.io/badge/npm-v9.6.7-CB3837?logo=npm)
![Build](https://img.shields.io/badge/build-passing-brightgreen)

---

## 📸 Screenshots

### Dashboard & Progress Tracking
![Dashboard Screenshot](./screenshots/dashboard.png)

### Task Modal (Edit)
![Edit Modal Screenshot](./screenshots/edit-modal.png)

### Delete Confirmation
![Delete Modal Screenshot](./screenshots/delete-modal.png)

---

## 🚀 Fitur Utama

✅ **Tambah Task Baru** → judul, kategori (Work / Personal / Urgent), due date.  
✅ **Drag & Drop** antar kolom (To Do → In Progress → Done).  
✅ **Filter Task** berdasarkan kategori.  
✅ **Progress Tracking** → progress bar dengan gradasi **lime → hijau → biru**.  
✅ **Warna Card Dinamis** → border-left berwarna sesuai kategori (Work = biru, Personal = hijau, Urgent = lime-hijau).  
✅ **Edit Task (Modal Form)** → ubah judul, kategori, due date dengan mudah.  
✅ **Konfirmasi Hapus (Modal)** → lebih aman sebelum task benar-benar dihapus.  
✅ **Highlight Deadline** → task overdue tampil dengan teks merah.  
✅ **Data Persisten** → semua task tersimpan di **localStorage**.  

---

## 🛠️ Tech Stack

- ⚛️ **React.js** (dengan Hooks)  
- 🎨 **CSS3** dengan custom theme + gradient  
- 🖱️ **React DnD** (Drag & Drop)  
- 🗄️ **LocalStorage Hook** untuk penyimpanan offline  
- 📅 **date-fns** untuk format tanggal  

---

## 📂 Struktur Project

```
src/
 ├── components/
 │   ├── TaskForm.js
 │   ├── TaskList.js
 │   ├── TaskCard.js
 │   ├── FilterBar.js
 │   ├── EditTaskModal.js
 │   ├── ConfirmDeleteModal.js
 │
 ├── hooks/
 │   └── useLocalStorage.js
 │
 ├── App.js
 ├── App.css
 └── index.js
```

---

## ⚙️ Instalasi & Menjalankan

1. Clone repo:
   ```bash
   git clone https://github.com/usamahdhaqi/task-management-app.git
   cd task-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan app:
   ```bash
   npm start
   ```

4. Buka di browser:
   ```
   http://localhost:3000
   ```

---

## 🎨 Tema & Warna

- **Background:** Gradient hijau muda → biru muda  
- **Progress Bar:** Lime → Hijau → Biru  
- **Task Card Border:**
  - Work → Biru → Biru gelap
  - Personal → Hijau → Hijau tua
  - Urgent → Lime kehijauan → Hijau  

---

## 📅 Roadmap (Ide Pengembangan)

- [ ] Subtasks / Checklist per Task  
- [ ] Export & Import data (JSON/CSV)  
- [ ] Statistik & Dashboard dengan grafik (Chart.js / Recharts)  
- [ ] Dark Mode toggle  
- [ ] Integrasi Notifikasi Deadline (misalnya H-1)  

---

## 📜 Lisensi

Distributed under the MIT License.  
Lihat file [LICENSE](./LICENSE) untuk detail.

---

## 🙌 Kontribusi

1. Fork repo  
2. Buat branch baru (`git checkout -b feature/fiturBaru`)  
3. Commit perubahan (`git commit -m 'Tambah fitur baru'`)  
4. Push ke branch (`git push origin feature/fiturBaru`)  
5. Buat Pull Request  

---

✨ Dibuat dengan semangat dan React.js ⚛️
