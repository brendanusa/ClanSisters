describe('App', () => {
  let {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = React.addons.TestUtils;

  let app;

  beforeEach(() => {
    app = renderIntoDocument(
      <App />
    );
  });

  it('should be a stateful class component', () => {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });
});