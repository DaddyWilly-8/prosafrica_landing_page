// Add this file to integrate Vercel Speed Insights with Next.js App Router
'use client';
import { SpeedInsights } from '@vercel/speed-insights/next';

export function VercelSpeedInsights() {
  return <SpeedInsights />;
}
