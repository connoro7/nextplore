import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../mongoClientPromise';

export const getAllUsers = async (req: NextRequest, res: NextResponse): Promise<void> => {
  try {
    const client = await clientPromise;
    const db = client.db('nextplore');
    const users = await db.collection('users').find().toArray();
    res.json(users);

  } catch (error) {
    console.log(error);
  }
}
