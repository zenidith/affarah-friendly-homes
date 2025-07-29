import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PageLoader from '@/components/PageLoader';
import ErrorBoundary from '@/components/ErrorBoundary';

// Lazy load pages for code splitting
const Index = lazy(() => import('@/pages/Index'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Terms = lazy(() => import('@/pages/Terms'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Thanks = lazy(() => import('@/pages/Thanks'));

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {/* Redirect root to preferred language */}
      <Route path="/" element={<Navigate to="/en" replace />} />
      
      {/* Language-specific routes - handle both with and without trailing slash */}
      <Route path="/en" element={<ErrorBoundary><Index lang="en" /></ErrorBoundary>} />
      <Route path="/en/" element={<ErrorBoundary><Index lang="en" /></ErrorBoundary>} />
      <Route path="/ja" element={<ErrorBoundary><Index lang="ja" /></ErrorBoundary>} />
      <Route path="/ja/" element={<ErrorBoundary><Index lang="ja" /></ErrorBoundary>} />
      
      {/* Language-specific terms and privacy routes */}
      <Route path="/en/terms" element={<ErrorBoundary><Terms lang="en" /></ErrorBoundary>} />
      <Route path="/ja/terms" element={<ErrorBoundary><Terms lang="ja" /></ErrorBoundary>} />
      <Route path="/en/privacy" element={<ErrorBoundary><Privacy lang="en" /></ErrorBoundary>} />
      <Route path="/ja/privacy" element={<ErrorBoundary><Privacy lang="ja" /></ErrorBoundary>} />

      {/* Thank you page */}
      <Route path="/thanks" element={<ErrorBoundary><Thanks /></ErrorBoundary>} />

      {/* Redirects for language-agnostic paths */}
      <Route path="/terms" element={<Navigate to="/en/terms" replace />} />
      <Route path="/privacy" element={<Navigate to="/en/privacy" replace />} />

      {/* Fallback for any other route */}
      <Route path="*" element={<ErrorBoundary><NotFound /></ErrorBoundary>} />
    </Routes>
  </Suspense>
);

export default AppRouter;
