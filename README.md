# Email Validator API

A simple Node.js application that validates email addresses, containerized with Docker and running on port 8080.

## Features

- ✅ Email validation with comprehensive checks
- 🌐 RESTful API endpoints
- 🐳 Docker containerization
- 📱 Simple web interface
- 🔍 Health check endpoint

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| POST | `/validate` | Validate email via POST |
| GET | `/validate/:email` | Validate email via URL |
| GET | `/health` | Health check |

## Quick Start

### Using Docker Compose
```bash
docker-compose up --build
```

### Using Docker
```bash
docker build -t email-validator .
docker run -p 8080:8080 email-validator
```

### Local Development
```bash
npm install
npm start
```

## Usage

- Web interface: http://localhost:8080
- API documentation: http://localhost:8080/
- Health check: http://localhost:8080/health

## Example API Call

```bash
curl -X POST http://localhost:8080/validate \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

## Features

- ✅ Email validation with comprehensive checks
- 🌐 RESTful API endpoints
- 🐳 Docker containerization
- 📱 Simple web interface
- 🔍 Health check endpoint
- 🛡️ CORS enabled for cross-origin requests

## Email Validation Rules

The application validates emails according to the following criteria:

- Basic email format (user@domain.com)
- Minimum length: 5 characters
- Maximum length: 254 characters (RFC 5321)
- Local part maximum: 64 characters
- Domain maximum: 253 characters
- Domain must contain at least one dot
- Proper @ symbol usage

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information and available endpoints |
| POST | `/validate` | Validate email address via POST request |
| GET | `/validate/:email` | Validate email address via URL parameter |
| GET | `/health` | Health check endpoint |

### Example Usage

#### POST /validate
```bash
curl -X POST http://localhost:8080/validate \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

Response:
```json
{
  "success": true,
  "email": "test@example.com",
  "isValid": true,
  "message": "Email is valid"
}
```

#### GET /validate/:email
```bash
curl http://localhost:8080/validate/test@example.com
```

## Running the Application

### Option 1: Using Docker Compose (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd email-validator
```

2. Build and run with Docker Compose:
```bash
docker-compose up --build
```

3. Access the application:
   - Web interface: http://localhost:8080
   - API documentation: http://localhost:8080/
   - Health check: http://localhost:8080/health

### Option 2: Using Docker directly

1. Build the Docker image:
```bash
docker build -t email-validator .
```

2. Run the container:
```bash
docker run -p 8080:8080 email-validator
```

### Option 3: Running locally (without Docker)

1. Install dependencies:
```bash
npm install
```

2. Start the application:
```bash
npm start
```

The application will run on port 3000 by default when running locally.

## Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Docker (for containerized deployment)

### Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Start production server
npm start

# Run tests (if implemented)
npm test
```

## Docker Configuration

The application is configured to run on port 8080 inside the container, which is mapped to port 8080 on the host machine.

### Docker Features
- Uses Node.js 18 Alpine for smaller image size
- Runs as non-root user for security
- Includes health checks
- Production-optimized with `npm ci --only=production`

## Project Structure

```
email-validator/
├── public/
│   └── index.html          # Web interface
├── server.js               # Main application file
├── package.json            # Node.js dependencies
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose configuration
├── .dockerignore           # Docker ignore file
└── README.md               # This file
```

## Testing the API

### Using curl

1. **Validate a valid email:**
```bash
curl -X POST http://localhost:8080/validate \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com"}'
```

2. **Validate an invalid email:**
```bash
curl -X POST http://localhost:8080/validate \
  -H "Content-Type: application/json" \
  -d '{"email": "invalid-email"}'
```

3. **Check health status:**
```bash
curl http://localhost:8080/health
```

### Using the Web Interface

1. Open http://localhost:8080 in your browser
2. Enter an email address in the input field
3. Click "Validate Email" or press Enter
4. View the validation result

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| PORT | 3000 (local) / 8080 (Docker) | Port number for the application |
| NODE_ENV | production | Node.js environment |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

# n40