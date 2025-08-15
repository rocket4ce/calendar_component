# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.5] - 2024-12-15

### Added
- `static_calendar/1` component for use with regular Phoenix controllers (no LiveView required)
- Static calendar JavaScript module for vanilla Phoenix applications
- Support for string-based JavaScript callbacks in static calendar options
- Auto-initialization of static calendars via CSS class selector
- Comprehensive documentation for controller usage
- New exports in JavaScript module for static calendar functions

### Changed
- Enhanced component module documentation to cover both LiveView and controller usage
- Updated installation guides with controller-specific examples
- Added controller examples to README
- Improved JavaScript build process to generate both LiveView hooks and static calendar modules

### Fixed
- Calendar now works in both LiveView and traditional Phoenix controller contexts

## [0.1.4] - 2024-12-15

### Added
- ES6 module support for JavaScript hooks
- `index.js` entry point for easier import in Phoenix applications
- `package.json` for npm compatibility
- Improved documentation with installation examples

### Changed
- JavaScript build format changed from IIFE to ESM for better compatibility
- Updated README with clearer installation instructions
- Simplified hook registration process

### Fixed
- JavaScript import issues when using `{:calendar_component, "~> 0.1.9"}` in Phoenix apps
- Hook accessibility for external applications

## [0.1.3] - 2024-12-14

### Added
- Initial release of the calendar component
- Phoenix LiveView integration
- EventCalendar JS hooks
- CSS compilation
- Documentation and examples

### Features
- Interactive calendar rendering
- Event handling with LiveView callbacks
- Customizable options forwarding to EventCalendar
- Automatic plugin selection based on view type
- CSS and JS asset compilation
