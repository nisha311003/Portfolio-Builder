const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("MongoDB connected"))
.catch(err =>console.error("MongoDB connection error: ",err));

app.use('/api', authRoutes);
app.use('/api', portfolioRoutes);

app.get('/', (req, res) => {
    res.send('🚀 Backend is running successfully!');
  })


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));