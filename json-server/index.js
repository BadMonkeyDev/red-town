const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const path = require('path');

function getTokens() {
    const tokensPath = path.resolve(__dirname, 'tokens.json');
    if (fs.existsSync(tokensPath)) {
        return JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
    }
    return [];
}

function saveToken(token) {
    const tokens = getTokens();
    tokens.push(token);
    fs.writeFileSync(path.resolve(__dirname, 'tokens.json'), JSON.stringify(tokens));
}

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromDb = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromDb) {
            const token = jwt.sign({ userId: userFromDb.id }, 'your_secret_key');
            saveToken(token);

            return res
                .header('Authorization', `Bearer ${token}`)
                .json({ id: userFromDb.id, username: userFromDb.username });
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        const tokens = getTokens();
        if (tokens.includes(token)) {
            // Token is valid
            next();
        } else {
            return res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        return res.status(401).json({ message: 'Missing token' });
    }
});

server.use(router);

// запуск сервера
server.listen(8000, () => {
    // eslint-disable-next-line no-console
    console.log('server is running on 8000 port');
});
