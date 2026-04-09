"use client";

import React from 'react';
import MartClient from '../../../app/mart/MartClient';

// This is a wrapper for the Mart page to be used in both Next.js and React Router (Vite)
export default function MartPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <MartClient />
    </div>
  );
}
