import { expect } from 'chai';
import converteToHumanTime from '../src/converteToHumanTime';

describe('CconverteToHumanTime', () => {
	it('should receive 0ms and convert to 0:00', () => {
		expect(converteToHumanTime(0)).to.be.equal('0:00');
	});

	it('should receive 1000ms and converte to 0:001', () => {
		expect(converteToHumanTime(1000)).to.be.equal('0:01');
	});

	it('should receive 11000ms and converte to 0:11', () => {
		expect(converteToHumanTime(11000)).to.be.equal('0:11');
	});

	it('should receive 60000ms and converte to 1:00', () => {
		expect(converteToHumanTime(60000)).to.be.equal('1:00');
	});
});
