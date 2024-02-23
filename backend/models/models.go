package models

type URL struct {
	id        string `json:"id"`
	url       string `json:"url"`
	click     int64  `json:"click"`
	shortUrl  string `json:"shortUrl"`
	createdAt string `json:"createdAt"`
}
