const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  // You can add more user-related fields here as needed.
  // For example, user preferences, favorites, etc.
  // Example:
  // preferences: {
  //   type: Map,
  //   of: String,
  // },
  courses: [
    {
      courseName: {
        type: String,
        required: true,
      },
      subjects: [
        {
          subjectName: {
            type: String,
            required: true,
          },
          videos: [
            {
              videoTitle: String,
              videoURL: String,
            },
          ],
          documents: [
            {
              documentTitle: String,
              documentURL: String,
              documentType: String, // e.g., "PDF", "Syllabus", "PYQ"
            },
          ],
        },
      ],
    },
  ],
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;

// const userSchema = mongoose.Schema(
//     {
//         "_id": ObjectId("user_id"),       // Unique user identifier
//         "username": "user123",            // User's username
//         "email": "user@example.com",       // User's email address
//         "passwordHash": "hashed_password", // Hashed password
//         "coursesEnrolled": [
//           {
//             "courseId": ObjectId("course_id_1"),  // Reference to enrolled course
//             "enrollmentDate": ISODate("2023-09-13T00:00:00Z"),
//             "subjectsCompleted": [
//               ObjectId("subject_id_1"),  // Reference to completed subject
//               ObjectId("subject_id_2")
//             ]
//           },
//           {
//             "courseId": ObjectId("course_id_2"),
//             "enrollmentDate": ISODate("2023-09-14T00:00:00Z"),
//             "subjectsCompleted": [
//               ObjectId("subject_id_3"),
//               ObjectId("subject_id_4")
//             ]
//           }
//         ],
//         "favorites": {
//           "videos": [
//             ObjectId("video_id_1"),  // Reference to favorite videos
//             ObjectId("video_id_2")
//           ],
//           "documents": [
//             ObjectId("document_id_1"),  // Reference to favorite documents
//             ObjectId("document_id_2")
//           ]
//         },
//         "createdOn": ISODate("2023-09-13T08:00:00Z"),  // User registration date
//         "lastLogin": ISODate("2023-09-13T10:30:00Z")  // Last login timestamp
//     }
// )
