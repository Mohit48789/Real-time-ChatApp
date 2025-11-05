import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Event listener for successful connection
    mongoose.connection.on('connected', () => 
      console.log('✅ Database connected successfully')
    );

    // ✅ Corrected connection string (fixed the template literal)
    await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);

  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
};
