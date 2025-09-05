// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//     const authHeader = req.headers.authorization; // ✅ correct spelling
//     if (!authHeader) {
//         return res.status(401).json({ success: false, message: "No token provided" });
//     }

//     // ✅ Handle "Bearer <token>"
//     const token = authHeader.split(" ")[1];
//     if (!token) {
//         return res.status(401).json({ success: false, message: "Invalid token format" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded; // store user info in request
//         next();
//     } catch (error) {
//         return res.status(401).json({ success: false, message: "Invalid token" });
//     }
// };

// export default auth;


// // import jwt from "jsonwebtoken";

// // const auth = (req, res, next) => {
// //     const token = req.headers.authorization; // ✅ correct spelling

// //     if (!token) {
// //         return res.status(401).json({ success: false, message: "No token provided" });
// //     }

// //     try {
// //         jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); // usually 'Bearer <token>'
// //         next();
// //     } catch (error) {
// //         return res.status(401).json({ success: false, message: "Invalid token" });
// //     }
// // };

// // export default auth;
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ success: false, message: "Invalid token format" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // ✅ pass user info to routes
        next();
    } catch (error) {
        console.error("Auth error:", error.message);
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default auth;