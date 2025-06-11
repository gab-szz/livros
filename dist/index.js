import "dotenv/config";
import app from './app.js';
const PORT = 8383;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
