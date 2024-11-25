export default async function handler(req, res) {
    if (req.method === "POST") {
      const { email, password } = req.body;
  
      // Replace this with actual user creation logic
      console.log("Registering user:", { email, password });
      res.status(201).json({ message: "Registration successful" });
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  