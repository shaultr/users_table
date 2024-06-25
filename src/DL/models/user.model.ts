import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  name: string;
  id: string;
  phone: string;
  age: number;
  email: string;
  status: string;
  money: number;
  active: boolean;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  status: { type: String, required: true },
  money: { type: Number, required: true },
  active: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
