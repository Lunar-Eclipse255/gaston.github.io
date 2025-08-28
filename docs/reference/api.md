---
layout: sidebar
title: API Reference
id: api-reference
permalink: /reference/api/
---

# API Reference

Complete API documentation with examples.

## Authentication

All API requests require authentication:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://api.example.com/endpoint
```

## Endpoints

### GET /api/status

Returns system status:

```json
{
  "status": "ok",
  "version": "1.0.0"
}
```

### POST /api/data

Create new data entry:

```json
{
  "name": "Example",
  "value": "test"
}
```

## Error Handling

The API returns standard HTTP status codes:

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `500` - Server Error
