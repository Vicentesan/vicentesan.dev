'use client';

import { useEffect } from 'react';

export function ClientScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return null;
}
