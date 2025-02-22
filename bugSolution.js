This solution uses the `encodeURI` function to encode the URI before passing it to the Expo Image component:

```javascript
import * as React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const imageUri = 'https://example.com/image with spaces.jpg';
  const encodedUri = encodeURI(imageUri);

  return (
    <Image
      source={{ uri: encodedUri }}
      style={{ width: 200, height: 200 }}
    />
  );
};

export default MyComponent;
```