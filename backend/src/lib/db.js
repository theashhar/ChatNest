import mongoose from 'mongoose'
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongo Connected", conn.connection.host)
    } catch (err) {
        console.log('Mongo error:', err)
    }
}