const chai = require('chai');
const expect = chai.expect;
const { addDestination, deleteDestination, saveDestination } = require('./script1');

describe('Destination Functions', () => {
  it('addDestination should add a destination', () => {
    const destinationsData = [];
    localStorage.clear();

    addDestination('New Destination');
    const storedData = JSON.parse(localStorage.getItem('destinations'));

    expect(storedData).to.have.lengthOf(1);
    expect(storedData[0].name).to.equal('New Destination');
  });

  it('deleteDestination should delete a destination', () => {
    const destinationsData = [{ id: 1, name: 'Test Destination' }];
    localStorage.setItem('destinations', JSON.stringify(destinationsData));

    deleteDestination(1);
    const storedData = JSON.parse(localStorage.getItem('destinations'));

    expect(storedData).to.have.lengthOf(0);
  });

  it('saveDestination should save a destination', () => {
    const destinationsData = [{ id: 1, name: 'Old Destination' }];
    localStorage.setItem('destinations', JSON.stringify(destinationsData));

    saveDestination(1, 'Updated Destination');
    const storedData = JSON.parse(localStorage.getItem('destinations'));

    expect(storedData[0].name).to.equal('Updated Destination');
  });
});

