import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['ai-trader.trade', 'www.ai-trader.trade', 'traderai-xdib.onrender.com'],
  },
  preview: {
    allowedHosts: ['ai-trader.trade', 'www.ai-trader.trade', 'traderai-xdib.onrender.com', '.onrender.com'],
    host: true,
    port: 10000,
  },
});
