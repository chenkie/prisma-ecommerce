import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'hello' });
});

app.get('/products', async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    select: {
      name: true,
      reviews: {
        select: {
          text: true,
          rating: true
        }
      }
    }
  });

  res.json(products);
});

app.post('/products', async (req: Request, res: Response) => {
  const { body } = req;

  const product = await prisma.product.create({
    data: {
      name: body.name,
      description: body.description,
      price: body.price
    }
  });

  res.json(product);
});

app.post('/reviews', async (req: Request, res: Response) => {
  const { body } = req;

  const review = await prisma.review.create({
    data: {
      text: body.text,
      rating: body.rating,
      product: {
        connect: {
          id: body.productId
        }
      }
    }
  });

  res.json(review);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);
