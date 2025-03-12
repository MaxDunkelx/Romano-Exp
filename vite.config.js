import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Romano-Exp/', // 👈 ADD THIS LINE
  plugins: [react()],
});
