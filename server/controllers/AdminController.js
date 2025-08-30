import jwt from 'jsonwebtoken';

export const adminLogin = async (req, res) => {
  try {
    // ✅ Destructure from req.body
    const { email, password } = req.body || {};

    console.log("req.body:", req.body);
    console.log("Provided:", email, password);
    console.log("From env:", process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD);

    if (!email || !password) {
      return res.json({ success: false, message: "Email and password required" });
    }

    if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
