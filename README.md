# Support Tickets

A simple support ticket manager built with React.

Designed with focus on modular architecture and separation of concerns.

## Introduction

This project consists of a frontend application developed with **React**, with the objective of implementing a simple support ticket management system.

The application allows users to:

- Create new tickets through a form
- View all created tickets
- Delete tickets individually
- Clear all stored tickets
- Navigate between pages using routing

Even though this is a simple project, the intention was to structure it in a scalable way from the beginning.

Before starting the implementation, I reflected on some important architectural decisions:

- Where should the state live?
- How can I avoid mixing business logic with the interface?
- How can I keep tickets even after refreshing the page?
- How can I structure the project in a modular way?

To organize these ideas, I created a sketch before starting the implementation.

## Thought Process

Below is the initial sketch used to define the application architecture:

<p align="center">
  <img src="./docs/rabisco.jpeg" alt="Initial project sketch" width="600"/>
</p>

In this planning phase, I defined:

- Separation between visual components and business logic
- A custom hook to centralize state management
- A service layer responsible for persistence
- Validation logic isolated from the form component
- A clear flow between creation → state update → persistence → listing

After this initial mapping, the implementation became more maintainable.

The architecture was organized in a modular way, separating responsibilities into **pages, components, hooks, services, and utils**.

## Implemented Features

### 1. Ticket Creation

Form containing:

- First Name
- Last Name
- Company
- E-mail
- Description

On submission:

- The data is validated
- A `ticket` object is created with a unique `id`
- A `createdAt` timestamp is generated automatically
- The ticket is added to the global state
- The ticket is saved in LocalStorage
- A success message is displayed

Validation was separated from the component.

### 2. Ticket Listing

- Displays all created tickets
- Data organized in table format
- Automatic update when tickets are added or removed
- Individual ticket deletion (Delete button)
- “Clear all” button to remove all tickets
- Persistence maintained even after page refresh

The table displays:

- First Name
- Last Name
- Company
- E-mail
- Description
- Created (date and time)
- Actions (Delete)

### 3. Navigation

Page navigation implemented using **React Router DOM**.

Defined routes:

- `/` → Redirects to `/new`
- `/new` → Ticket creation
- `/tickets` → Ticket list

Routing is centralized in `src/routes/index.jsx`.

## Technologies Used

- React 19
- Vite 7
- React Router DOM 7
- JavaScript (ES Modules)
- ESLint
- CSS

## Technical Decisions

### Routing

Routing is centralized in `src/routes/index.jsx` using **React Router DOM**.

Centralizing route definitions improves scalability and prevents routing configuration from being scattered across components.

### Custom Hook — useTickets

The ticket management logic was isolated into a custom hook responsible for:

- Adding new tickets
- Removing individual tickets
- Clearing all tickets
- Retrieving the list
- Integrating with the storage service

This keeps components focused on rendering.

### Persistence

The `ticketsStorage.js` service abstracts access to LocalStorage:

- Saves tickets
- Retrieves stored tickets
- Clears stored tickets

Data remains available even after refreshing the page.

If it becomes necessary to replace LocalStorage with an API in the future, only this layer will need to be modified.

### Validation

Validation rules are isolated in:

```
src/utils/validators.js
```

## Installation and Usage

### 1. Clone the repository

```bash
git clone https://github.com/brenoo-luiz/ticket-manager
```

### 2. Navigate to the project folder

```bash
cd ticket-manager
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The development server will start at:

```
http://localhost:5173
```

Open this address in your browser.
