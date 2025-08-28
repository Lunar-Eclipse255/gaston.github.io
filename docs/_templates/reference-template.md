---
layout: right-sidebar
title: "Reference Title"
description: "Technical reference documentation"
permalink: /content/reference/your-reference-name/
---

# {{ page.title }}

{{ page.description }}

## Overview

Brief overview of what this reference covers.

## Quick Reference

| Item | Description | Example |
|------|-------------|---------|
| Item 1 | Description | `example` |
| Item 2 | Description | `example` |

## Detailed Reference

### Section 1

#### Method/Function Name

**Syntax:**
```
methodName(parameter1, parameter2)
```

**Parameters:**
- `parameter1` (type): Description
- `parameter2` (type): Description

**Returns:**
- `returnType`: Description of return value

**Example:**
```javascript
const result = methodName('value1', 'value2');
```

### Section 2

#### Another Method

**Syntax:**
```
anotherMethod(options)
```

**Parameters:**
- `options` (object): Configuration object
  - `option1` (string): Description
  - `option2` (boolean): Description

**Example:**
```javascript
anotherMethod({
    option1: 'value',
    option2: true
});
```

## Configuration Options

### Option 1

- **Type:** string
- **Default:** `"default-value"`
- **Description:** What this option does

### Option 2

- **Type:** boolean
- **Default:** `false`
- **Description:** What this option controls

## Examples

### Basic Usage

```javascript
// Basic example
const basic = new Example();
```

### Advanced Usage

```javascript
// Advanced example with options
const advanced = new Example({
    option1: 'custom-value',
    option2: true
});
```

## See Also

- [Related Reference](/content/reference/related/)
- [Guide](/content/guides/related-guide/)
- [Tutorial](/content/tutorials/related-tutorial/)
