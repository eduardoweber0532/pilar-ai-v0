
import React from 'react';

export const COLORS = {
  bgDeep: '#0E0E0E',
  bgDark: '#111111',
  bgGraphite: '#161616',
  bgCard: '#1A1A1A',
  bgCardAlt: '#202020',
  purpleDeep: '#2D1B69',
  purpleVibrant: '#6A4CFF',
  magenta: '#FF4CF4',
  greyLight: '#E5E5E5',
};

export const PillarLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    {/* Base */}
    <rect x="20" y="80" width="60" height="8" rx="2" />
    {/* Top */}
    <rect x="20" y="12" width="60" height="8" rx="2" />
    {/* Columns */}
    <rect x="28" y="25" width="8" height="50" rx="1" />
    <rect x="46" y="25" width="8" height="50" rx="1" />
    <rect x="64" y="25" width="8" height="50" rx="1" />
  </svg>
);

export const CheckIcon = () => (
  <svg className="w-6 h-6 text-[#6A4CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

export const XIcon = () => (
  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
