const { z } = require("zod")


const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at lest of 3 characters"})
    .max(255, {message: "Name must not be more than 255 char"}),
    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email"})
    .min(3, {message: "Email must be at lest of 3 characters"})
    .max(255, {message: "Email must not be more than 255 char"}),
    phone: z
    .string({required_error: "phone is required"})
    .trim()
    .min(10, {message: "Phone must be at lest of 10 characters"})
    .max(255, {message: "Phone must not be more than 20 char"}),
    password: z
    .string({required_error: "password is required"})
    .trim()
    .min(7, {message: "password must be at lest of 5 characters"})
    .max(1024, {message: "password must not be more than 1024 char"}),
});

module.exports = signupSchema;