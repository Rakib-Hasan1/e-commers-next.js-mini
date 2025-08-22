import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const collection = dbConnect("products");

      // Connect client before using collection
      await collection.s.db.client.connect();

      const result = await collection.insertOne(req.body);

      return res.status(201).json({ message: "Product added", id: result.insertedId });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to add product" });
    } finally {
      try {
        await dbConnect("products").s.db.client.close();
      } catch {}
    }
  } else if (req.method === "GET") {
    try {
      const collection = dbConnect("products");
      await collection.s.db.client.connect();

      const products = await collection.find({}).limit(8).toArray();

      return res.status(200).json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to fetch products" });
    } finally {
      try {
        await dbConnect("products").s.db.client.close();
      } catch {}
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
