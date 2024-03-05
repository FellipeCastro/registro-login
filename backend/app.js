// Imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

const PORT = 3000

// Config JSON response
app.use(express.json())

// Models
const User = require('./models/User.js')

// Verificar token
const checkToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if (!token) {
        return res.status(401).json({ msg: 'Acesso negado' })
    }

    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
    } catch (err) {
        res.status(400).json({ msg: 'Token inválido' })
    }
}

// Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Hello World' })
})

// Private Route
app.get('/user/:id', checkToken, async (req, res) => {
    const id = req.params.id

    // Check if user exists
    const user = await User.findById(id, '-password')

    if (!user) {
        return res.status(404).json({ msg: 'Usuários não encontrado!' })
    }

    res.status(200).json({ user })
})

// Register User
app.post('/auth/register', async (req, res) => {
    const {name, email, password, confirmPassword} = req.body

    // Validations
    if (!name) {
        return res.status(422).json({ msg: 'O nome é obrigatório!' })
    }
    if (!email) {
        return res.status(422).json({ msg: 'O e-mail é obrigatório!' })
    }
    if (!password) {
        return res.status(422).json({ msg: 'A senha é obrigatório!' })
    }
    if (password !== confirmPassword) {
        return res.status(422).json({ msg: 'As senhas devem ser iguais!' })
    }

    // Check if user exists
    const userExists = await User.findOne({ email: email })

    if (userExists) {
        return res.status(422).json({ msg: 'Usuário já cadastrado!' })
    }

    // Create password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // Create user
    const user = new User({
        name,
        email,
        password: passwordHash,
    })

    try {
        await user.save()
        res.status(201).json({ msg: 'Usuário cadastrado com sucesso!' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Erro interno do servidor, tente novamente mais tarde!' })
    }
})

// Login User
app.post('/auth/login', async (req, res) => {
    const {email, password} = req.body

    // Validations
    if (!email) {
        return res.status(422).json({ msg: 'O e-mail é obrigatório!' })
    }
    if (!password) {
        return res.status(422).json({ msg: 'A senha é obrigatório!' })
    }

    // Check if user exists
    const user = await User.findOne({ email: email })

    if (!user) {
        return res.status(404).json({ msg: 'Usuário não encontrado!' })
    }

    // Check if password match
    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
        return res.status(422).json({ msg: 'Senha inválida!' })
    }

    try {
        const secret = process.env.SECRET
        const token = jwt.sign({
            id: user._id
        }, secret,)

        res.status(200).json({ msg: "Usuário logado com sucesso!", token })
    } catch (err) {
        console.log(err)
        res.status(500).json({ msg: 'Erro interno do servidor, tente novamente mais tarde!' })
    }
})

// Credencials
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.a7thngl.mongodb.net/AuthDb?retryWrites=true&w=majority`)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em: http://localhost:${PORT}`)
    })
})
.catch((err) => console.log(err))
