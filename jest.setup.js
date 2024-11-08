jest.mock('react-native', () => {
  return {
    StyleSheet: {
      create: jest.fn(styles => styles)
    },
    Platform: {
      select: jest.fn(obj => obj.default)
    },
    Dimensions: {
      get: jest.fn(() => ({width: 375, height: 812}))
    },
  };
}); 