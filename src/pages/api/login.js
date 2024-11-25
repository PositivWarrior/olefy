export default async function handler(req, res) {
    if (req.method === "POST") {
      const { email, password } = req.body;
  
      // Replace this with actual authentication logic
      if (email === "test@example.com" && password === "password") {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  