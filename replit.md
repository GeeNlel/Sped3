# Spéder Felújítás Website

## Overview

This is a Hungarian construction/renovation business website built with Flask. The website showcases services including painting, interior renovations, and complete home/office renovations for the Sopron area. The application follows a traditional server-side rendered architecture with Flask templates and static assets.

## System Architecture

### Frontend Architecture
- **Template Engine**: Jinja2 templates with Flask
- **CSS Framework**: Bootstrap 5.3.0 for responsive design
- **JavaScript**: Vanilla JavaScript for interactive elements
- **Styling**: Custom CSS with CSS variables for theming
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Raleway for headings, Roboto for body text)

### Backend Architecture
- **Framework**: Flask 2.3.3 (Python web framework)
- **Structure**: Simple MVC pattern with route handlers in `app.py`
- **Session Management**: Flask sessions with configurable secret key
- **Error Handling**: Custom 404 and 500 error pages
- **Logging**: Basic Python logging configuration

### Data Storage
- **Current State**: No database implementation (static content only)
- **Prepared Dependencies**: Requirements include Flask-SQLAlchemy and psycopg2-binary for future PostgreSQL integration
- **Images**: External images via Unsplash URLs (no local image storage currently)

## Key Components

### Route Structure
- `/` - Homepage with hero section and services overview
- `/about` - Company introduction and team information
- `/references` - Portfolio/gallery of completed projects
- `/pricing` - Service pricing and calculation information
- `/contact` - Contact information and details

### Template System
- **Base Template**: `base.html` with navigation, common head elements
- **Page Templates**: Individual pages extending base template
- **Error Templates**: Custom 404 and 500 error pages
- **Navigation**: Bootstrap navbar with active page highlighting

### Static Assets
- **CSS**: Custom styling in `static/css/style.css`
- **JavaScript**: Interactive functionality in `static/js/main.js`
- **Images**: Currently using external Unsplash URLs

## Data Flow

1. **Request Handling**: Flask routes process incoming requests
2. **Template Rendering**: Jinja2 renders HTML templates with context data
3. **Static Asset Serving**: Flask serves CSS, JS, and other static files
4. **Error Handling**: Custom error handlers for 404/500 responses

## External Dependencies

### CDN Dependencies
- Bootstrap 5.3.0 (CSS framework)
- Font Awesome 6.4.0 (icon library)
- Google Fonts (Raleway and Roboto fonts)

### Python Dependencies
- Flask 2.3.3 (web framework)
- Gunicorn 21.2.0 (WSGI server for deployment)
- Email-validator (for future form validation)
- Flask-SQLAlchemy (prepared for database integration)
- psycopg2-binary (PostgreSQL adapter)

### Image Sources
- Unsplash API for stock photography
- No local image storage implemented

## Deployment Strategy

### Development Setup
- **Entry Point**: `main.py` runs Flask development server
- **Configuration**: Environment-based secret key configuration
- **Debug Mode**: Enabled for development with host binding to 0.0.0.0:5000

### Production Deployment
- **WSGI Server**: Gunicorn configured for production serving
- **Application Import**: `app.py` contains the Flask application instance
- **Environment Variables**: SESSION_SECRET for secure session management

### Prepared Infrastructure
- Database connectivity ready for PostgreSQL integration
- Session management configured for user interactions
- Error handling prepared for production environments

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 08, 2025. Initial setup
- July 08, 2025. Successfully migrated from Replit Agent to standard Replit environment - all dependencies installed, gunicorn server running, website fully functional
- July 08, 2025. Implemented dynamic project system with automatic recent projects display on homepage and clickable project galleries with modal views. Removed duplicate content and category filters per user feedback.