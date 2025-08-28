---
layout: default
title: API Reference
parent: Reference
nav_order: 1
description: "Complete API documentation"
---

# API Reference

This page contains the complete API documentation.

## Overview

The API provides access to all core functionality through a simple REST interface.

## Endpoints

### GET /api/status

Returns the current system status.

**Response:**
```json
{
  "status": "ok",
  "version": "1.0.0",
  "timestamp": "2025-08-28T12:00:00Z"
}
```

### POST /api/data

Creates a new data entry.

**Request Body:**
```json
{
  "name": "Example",
  "value": "test data"
}
```

**Response:**
```json
{
  "id": "12345",
  "status": "created"
}
```

## Authentication

All API requests require authentication using an API key:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.example.com/status
```
