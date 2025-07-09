# Dynamic Layout Builder

This project is a dynamic layout builder that allows users to create customizable grid layouts with rows and columns. Users can interactively add, sort, and rearrange components within a flexible drag-and-drop interface.

<img width="1680" alt="Ekran Resmi 2025-07-09 22 57 31" src="https://github.com/user-attachments/assets/976520ae-0d4f-4814-9ec7-ee9d7d2ef965" />

## Tech Stack

- Vue 3 (Composition API)
- TailwindCSS
- Pinia (State Management)
- grid-layout-plus

## Features

- Row Structure Selection  
  On startup, the user is presented with a selection of predefined row structures (e.g., 1-column, 2-column, 3-column layouts).

- Live Preview  
  When a row structure is selected, a visual representation of the row and its columns is rendered dynamically.

- Sortable Rows  
  All rows can be reordered via drag and drop.

- Sortable Columns Within Rows  
  Each row's columns are sortable individually.

- Row Deletion  
  Each row includes a delete button to remove it from the layout.

## Installation

```bash
### For Vue 3 version

# Clone the repository
git clone https://github.com/firatorhan/vue-dynamic-layout.git

# Enter project directory
cd vue-dynamic-layout

# Switch to main branch (Vue 3)
git checkout main

# Install dependencies
npm install

# Run the development server
npm run dev

```
