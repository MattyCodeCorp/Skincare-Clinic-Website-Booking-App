# Skin Clinic - Frontend Demo & Booking Flow

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

> A high-fidelity, premium frontend concept for a luxury dermatology clinic, built by Co Creator Design Studio. This project focuses on eliminating patient friction through a seamless, zero-redirect integrated booking module and a calming, spa-like digital experience.

## 📋 Table of Contents
- [Overview](#overview)
- [The UX Problem & Solution](#the-ux-problem--solution)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Available Commands](#available-commands)
- [Project Structure](#project-structure)

## 📖 Overview
Traditional clinic and dermatology websites often suffer from poor user experiences—sterile designs, dense medical jargon, and clunky third-party booking portals that force users off-site. 

This project serves as a fully responsive, modern web prototype designed to solve these pain points. The aesthetic is heavily inspired by premium, tech-forward interfaces (utilizing glassmorphism, soft drop shadows, and cinematic layouts) to establish a luxurious, anxiety-free digital environment for prospective patients.

## 🎯 The UX Problem & Solution

| The Problem | Our Solution |
| :--- | :--- |
| **Clunky Redirects** | A seamless, multi-step slide-out booking drawer built directly into the UI. |
| **Information Overload** | Scannable treatment cards with clear tags for "Downtime" and "Pain Level". |
| **Intimidating Aesthetics** | A warm, spa-like visual identity using soft neutrals (Ivory, Pearl White, Sage). |

## ✨ Key Features
* **Integrated Booking Module:** A right-side slide-out modal for frictionless appointment scheduling (Intent -> Service -> Calendar -> Confirm).
* **Interactive Treatment Gallery:** Draggable "Before/After" image sliders for transparent result expectations.
* **Micro-Interactions & Animation:** Smooth scroll-triggered fade-ins and state transitions using Framer Motion to ensure the app feels instantaneous and premium.
* **Mobile-First Architecture:** Optimized touch targets and bottom-sheet navigation designed specifically for the 70%+ of users browsing on mobile.

## 🛠 Tech Stack
This frontend is built with modern, high-performance tooling, ready to be connected to a robust backend (like Node.js/MongoDB) in future phases:
* **Framework:** React 18 
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (configured for custom glassmorphism utilities)
* **Animations:** Framer Motion
* **Routing:** React Router DOM

## 🚀 Installation & Setup

To get a local copy of this frontend demo up and running, follow these steps:

**1. Prerequisites**
Ensure you have [Node.js](https://nodejs.org/) installed on your machine (v16.0.0 or higher is recommended).

**2. Clone/Install the repository**
```bash
git clone [Repo URL]

pnpm install

pnpm run dev

├── public/               # Static assets, favicon, and brand logos
├── src/
│   ├── assets/           # High-resolution clinic imagery and video backgrounds
│   ├── components/       
│   │   ├── BookingModal/ # The slide-out integrated booking flow
│   │   ├── UI/           # Reusable chips, buttons, and glassmorphism cards
│   │   └── Sliders/      # Interactive Before/After image components
│   ├── pages/            # Homepage, Treatments, and Contact views
│   ├── App.jsx           # Main routing entry point
│   └── main.jsx          # React DOM rendering
├── tailwind.config.js    # Custom brand colors (Warm Ivory, Sage Green)
└── package.json          # Dependencies
