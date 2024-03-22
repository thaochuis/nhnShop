import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                show: resolve(__dirname, "./show.html"),
                chitiet: resolve(__dirname, "./chitiet.html"),
                chitiets: resolve(__dirname, "./chitiets.html"),
                thanhtoan: resolve(__dirname, "./thanhtoan.html"),
            },
        },
    },
})