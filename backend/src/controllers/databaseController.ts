
import { Request, Response } from 'express';
import knex from 'knex';

const db = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'boomershub',
  },
});

export const getProperty = async (req: Request, res: Response) => {
  try {
    const propertyId = req.params.id;

    const property = await db.select().from('properties').where('id', propertyId).first();

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json({ property });
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving property' });
  }
};

export const getImage = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const images = await db.select().from('images').where('property_id',id);

    if (!images.length) {
      return res.status(404).json({ error: 'Images not found' });
    }

    res.json({ images});
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving image' });
  }
};

export const searchProperties = async (req: Request, res: Response) => {
  try {
    const { name, city, state } = req.query;

    let query = db.select().from('properties');

    if (name) {
      query = query.where('name', 'like', `%${name}%`);
    }

    if (city) {
      query = query.where('city', 'like', `%${city}%`);
    }

    if (state) {
      query = query.where('state', 'like', `%${state}%`);
    }

    const results = await query;

    res.json({ results });
  } catch (error) {
    console.error('Error searching properties:', error);
    res.status(500).json({ error: 'Error searching properties' });
  }
};
