package main

import "github.com/gofiber/fiber"

func handler(c *fiber.Ctx) error {
	// Variable is only valid within this handler
	result := c.Params("foo")

	// Make a copy
	buffer := make([]byte, len(result))
	copy(buffer, result)
	resultCopy := string(buffer)
	// Variable is now valid forever

	// ...
}
func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Listen(":3000")
}
