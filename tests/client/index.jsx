describe('App', function() {
  let {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = React.addons.TestUtils;

  let app;

  beforeEach(function() {
    app = renderIntoDocument(
      <App />
    );
  });

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });
});