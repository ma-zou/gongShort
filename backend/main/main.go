package main

import (
	"database/sql"
	"fmt"

	"github.com/gin-gonic/gin"

	_ "github.com/mattn/go-sqlite3"
)

func initDB(db *sql.DB) {
	db.Query("CREATE TABLE IF NOT EXISTS urls (id TEXT PRIMARY KEY DEFAULT (hex(randomblob(16))), url TEXT, click INTEGER, shortUrl TEXT, createdAt TEXT)")
}

func main() {
	db, err := sql.Open("sqlite3", "./sqlite-api.db")

	if err != nil {
		panic(err)
	}

	initDB(db)

	defer db.Close()

	router := gin.Default()

	router.GET("/api/", func(c *gin.Context) {
		fmt.Println("GET")
	})
	router.POST("/api/", func(c *gin.Context) {
		fmt.Println("POST")
	})
	router.PUT("/api/", func(c *gin.Context) {
		fmt.Println("PUT")
	})
	router.DELETE("/api/", func(c *gin.Context) {
		fmt.Println("DELETE")
	})

	router.Run(":8081")
}
