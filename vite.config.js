import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	server: {
		host: '0.0.0.0', // Доступ с любых адресов
		port: 3000, // Порт (по умолчанию 5173)
		strictPort: true, // Запрет автоматического выбора порта
	},
});
