import * as dotenv from "dotenv";
dotenv.config();
import { Application, Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import * as express from "express";
const prisma = new PrismaClient();
type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

const expressWrapper = async (app: Application) => {
  app.use(express.json());

  app.get("/ping", (_req: Request, res: Response) => {
    res.json({ message: "hello" });
  });

  app.get("/products", async (_req: Request, res: Response) => {
    const products = await prisma.product.findMany({
      select: {
        name: true,
        reviews: {
          select: {
            id: true,
            text: true,
            rating: true
          }
        }
      }
    });

    res.json(products);
  });

  app.post("/products", async (req: Request, res: Response) => {
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

  app.get("/reviews", async (req: Request, res: Response) => {
    const { body } = req;
    const { text, rating, productId, id } = Prisma.ReviewScalarFieldEnum;

    const review = await prisma.review.findUnique({
      where: {
        id: "cku4xfsoi0059xxsv1ugrhdkw"
      },
      select: {
        id: true,
        product: true
      }
    });

    res.json(review?.product);
  });

  const PORT = 3001;
  app.listen(PORT);
  console.log(`Listening on http://localhost:${PORT}/reviews`);
};

expressWrapper(express());
