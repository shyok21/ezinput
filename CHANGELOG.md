# Changelog

## [1.1.0] - 2025-07-15

### Added
- `input.array()`: Parses array from single or multi-line JSON input.
- `input.object()`: Parses object from single or multi-line JSON input.
- `input.json()`: Generic parser that handles both arrays and objects.
- Multi-line parsing using bracket balance logic.
- Descriptive errors for invalid/malformed JSON.
- Full test coverage for all parsing methods (valid + invalid cases).

### Test
- Added `ezinput-complex-parsing.test.js` for parsing methods.
- Added `ezinput-invalid-parsing.test.js` for malformed inputs.
