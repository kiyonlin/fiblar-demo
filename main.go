package main

import (
	"github.com/gofiber/fiber"
	"log"
)

func main() {
	// Create new Fiber instance
	app := fiber.New()

	// serve Single Page application on "/web"
	// assume static file at dist folder
	app.Static("/", "dist")

	apiGroup := app.Group("/api")
	{
		apiGroup.Get("/user", func(c *fiber.Ctx) {
			c.JSON(fiber.Map{"id": 1, "name": "kiyon"})
		})
	}

	app.Get("/*", func(c *fiber.Ctx) {
		if err := c.SendFile("dist/index.html"); err != nil {
			c.Next(fiber.ErrInternalServerError)
		}
	})

	for _, route := range app.Routes() {
		log.Println(route.Method, route.Path)
	}

	// Start server on http://localhost:3000
	log.Fatal(app.Listen(3000))
}
