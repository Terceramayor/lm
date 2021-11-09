export default {
  setAccessToken: jest.fn(),
  Camera: jest.fn(() => 'mockedCameraComponent'),
  MapView: jest.fn(() => 'mockedMapViewComponent'),
  PointAnnotation: jest.fn(() => 'mockedPointAnnotationComponent'),
};
