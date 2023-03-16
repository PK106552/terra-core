Terra.describeViewports('TerraTestComp', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/components/terra-terra-test-comp/terra-test-comp/terra-test-comp'));

    it('validates the element', () => {
      Terra.validates.element('fusion');
    });
  });
});
