# Expo Image Component URI Space Issue

This repository demonstrates a bug where the Expo `Image` component fails to load images when the URI contains spaces.  The issue is that no error is thrown, making debugging difficult.  The provided solution offers a workaround.

## Bug Reproduction

1. Clone the repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe that the image with spaces in the URI fails to load.

## Solution

The solution involves URL encoding the URI before passing it to the `Image` component.  This handles special characters appropriately.

## Contributing

Contributions are welcome!