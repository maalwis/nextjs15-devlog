'use client';

import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
      <div className="container">
        <header className="header">
          <h1>Welcome to Next.js 15 & React 19 Learning!</h1>
          <p>Learn the fundamentals of Next.js and React with this simple guide.</p>
        </header>

        <footer className="footer">

        </footer>

        <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
        }

        .header {
          margin-bottom: 20px;
        }

        .content {
          margin: 20px;
          text-align: center;
        }

        .footer {
          margin-top: 20px;
        }

        a {
          color: #0070f3;
          font-weight: bold;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
      </div>
  );
}
